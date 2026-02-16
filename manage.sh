#!/bin/bash

# GDigital Website Management Script
# Quick commands for common operations

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

APP_DIR="/var/www/gdigital-website"

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

show_help() {
    echo "GDigital Website Management Script"
    echo ""
    echo "Usage: ./manage.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start       - Start the container"
    echo "  stop        - Stop the container"
    echo "  restart     - Restart the container"
    echo "  logs        - View container logs (follow mode)"
    echo "  status      - Show container status"
    echo "  rebuild     - Rebuild and restart container"
    echo "  update      - Pull changes and rebuild"
    echo "  shell       - Open shell in container"
    echo "  nginx-test  - Test nginx configuration"
    echo "  nginx-reload - Reload nginx"
    echo "  ssl         - Setup SSL certificate"
    echo "  health      - Check application health"
    echo "  stats       - Show resource usage"
    echo "  cleanup     - Remove unused Docker resources"
    echo "  backup      - Create backup of application"
    echo "  help        - Show this help message"
    echo ""
}

case "$1" in
    start)
        print_info "Starting container..."
        cd "$APP_DIR"
        docker-compose up -d
        print_success "Container started"
        ;;
    
    stop)
        print_info "Stopping container..."
        cd "$APP_DIR"
        docker-compose down
        print_success "Container stopped"
        ;;
    
    restart)
        print_info "Restarting container..."
        cd "$APP_DIR"
        docker-compose restart
        print_success "Container restarted"
        ;;
    
    logs)
        print_info "Showing logs (Ctrl+C to exit)..."
        cd "$APP_DIR"
        docker-compose logs -f
        ;;
    
    status)
        print_info "Container status:"
        cd "$APP_DIR"
        docker-compose ps
        echo ""
        print_info "Port status:"
        netstat -tuln | grep 3000 || echo "Port 3000 not listening"
        ;;
    
    rebuild)
        print_info "Rebuilding container..."
        cd "$APP_DIR"
        docker-compose down
        docker-compose up -d --build --force-recreate
        print_success "Container rebuilt and started"
        ;;
    
    update)
        print_info "Pulling latest changes..."
        cd "$APP_DIR"
        if [ -d .git ]; then
            git pull
            print_success "Changes pulled"
        else
            print_info "Not a git repository, skipping pull"
        fi
        print_info "Rebuilding container..."
        docker-compose down
        docker-compose up -d --build --force-recreate
        print_success "Application updated"
        ;;
    
    shell)
        print_info "Opening shell in container..."
        docker exec -it gdigital-website sh
        ;;
    
    nginx-test)
        print_info "Testing nginx configuration..."
        sudo nginx -t
        ;;
    
    nginx-reload)
        print_info "Reloading nginx..."
        sudo systemctl reload nginx
        print_success "Nginx reloaded"
        ;;
    
    ssl)
        print_info "Setting up SSL certificate..."
        echo "This will obtain SSL certificate for gdigital.pk"
        echo "Make sure DNS is pointing to this server first!"
        read -p "Continue? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sudo certbot --nginx -d gdigital.pk -d www.gdigital.pk
            print_success "SSL certificate obtained"
        else
            print_info "SSL setup cancelled"
        fi
        ;;
    
    health)
        print_info "Checking application health..."
        echo ""
        echo "1. Container status:"
        docker ps | grep gdigital-website || print_error "Container not running"
        echo ""
        echo "2. Container health:"
        docker inspect gdigital-website | grep -A 5 '"Health"' || echo "No health check data"
        echo ""
        echo "3. Application response:"
        if curl -s http://localhost:3000 > /dev/null; then
            print_success "Application responding on localhost:3000"
        else
            print_error "Application not responding on localhost:3000"
        fi
        echo ""
        echo "4. Nginx status:"
        sudo systemctl status nginx --no-pager | head -5
        ;;
    
    stats)
        print_info "Resource usage:"
        docker stats gdigital-website --no-stream
        ;;
    
    cleanup)
        print_info "Cleaning up Docker resources..."
        docker system prune -f
        print_success "Cleanup complete"
        ;;
    
    backup)
        BACKUP_DIR="/root/backups"
        BACKUP_FILE="gdigital-website-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
        
        print_info "Creating backup..."
        mkdir -p "$BACKUP_DIR"
        tar -czf "$BACKUP_DIR/$BACKUP_FILE" \
            --exclude='node_modules' \
            --exclude='.git' \
            --exclude='.next' \
            "$APP_DIR"
        print_success "Backup created: $BACKUP_DIR/$BACKUP_FILE"
        ;;
    
    help|--help|-h|"")
        show_help
        ;;
    
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
