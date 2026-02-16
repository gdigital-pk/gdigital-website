#!/bin/bash

# GDigital Website Deployment Script
# This script automates the deployment process

set -e  # Exit on error

echo "=========================================="
echo "GDigital Website Deployment Script"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/var/www/gdigital-website"
NGINX_SITES_AVAILABLE="/etc/nginx/sites-available"
NGINX_SITES_ENABLED="/etc/nginx/sites-enabled"
SITE_NAME="gdigital.pk"

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if running as root for nginx operations
check_sudo() {
    if [ "$EUID" -ne 0 ]; then 
        print_error "This script needs sudo privileges for nginx configuration."
        print_info "Please run with: sudo ./deploy.sh"
        exit 1
    fi
}

# Step 1: Check prerequisites
echo "Step 1: Checking prerequisites..."
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed"
    exit 1
fi
print_success "Docker is installed"

if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed"
    exit 1
fi
print_success "Docker Compose is installed"

if ! command -v nginx &> /dev/null; then
    print_error "Nginx is not installed"
    exit 1
fi
print_success "Nginx is installed"

echo ""

# Step 2: Build and start Docker container
echo "Step 2: Building and starting Docker container..."
cd "$APP_DIR"

print_info "Stopping existing container (if any)..."
docker-compose down || true

print_info "Building Docker image..."
docker-compose build

print_info "Starting container..."
docker-compose up -d

# Wait for container to be healthy
print_info "Waiting for container to be ready..."
sleep 10

if docker ps | grep -q gdigital-website; then
    print_success "Container is running"
else
    print_error "Container failed to start"
    docker-compose logs
    exit 1
fi

echo ""

# Step 3: Configure Nginx
echo "Step 3: Configuring Nginx..."

if [ ! -f "$NGINX_SITES_AVAILABLE/$SITE_NAME" ]; then
    print_info "Copying nginx configuration..."
    cp "$APP_DIR/nginx-gdigital.conf" "$NGINX_SITES_AVAILABLE/$SITE_NAME"
    print_success "Nginx configuration copied"
else
    print_info "Nginx configuration already exists, updating..."
    cp "$APP_DIR/nginx-gdigital.conf" "$NGINX_SITES_AVAILABLE/$SITE_NAME"
    print_success "Nginx configuration updated"
fi

if [ ! -L "$NGINX_SITES_ENABLED/$SITE_NAME" ]; then
    print_info "Enabling site..."
    ln -s "$NGINX_SITES_AVAILABLE/$SITE_NAME" "$NGINX_SITES_ENABLED/$SITE_NAME"
    print_success "Site enabled"
else
    print_success "Site already enabled"
fi

echo ""

# Step 4: Test and reload Nginx
echo "Step 4: Testing and reloading Nginx..."
if nginx -t; then
    print_success "Nginx configuration is valid"
    systemctl reload nginx
    print_success "Nginx reloaded"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

echo ""

# Step 5: Verify deployment
echo "Step 5: Verifying deployment..."

# Check if container is running
if docker ps | grep -q gdigital-website; then
    print_success "Container is running"
else
    print_error "Container is not running"
    exit 1
fi

# Check if port 3000 is listening
if netstat -tuln | grep -q ":3000"; then
    print_success "Application is listening on port 3000"
else
    print_error "Application is not listening on port 3000"
    exit 1
fi

# Test local connection
if curl -s http://localhost:3000 > /dev/null; then
    print_success "Application responds on localhost:3000"
else
    print_error "Application does not respond on localhost:3000"
    exit 1
fi

echo ""
echo "=========================================="
echo "Deployment completed successfully!"
echo "=========================================="
echo ""
print_info "Next steps:"
echo "1. Point your domain gdigital.pk to this server's IP"
echo "2. Test the site: curl http://gdigital.pk"
echo "3. Set up SSL: sudo certbot --nginx -d gdigital.pk -d www.gdigital.pk"
echo ""
print_info "Useful commands:"
echo "  - View logs: docker-compose logs -f"
echo "  - Restart: docker-compose restart"
echo "  - Stop: docker-compose down"
echo "  - Nginx logs: tail -f /var/log/nginx/gdigital.pk_access.log"
echo ""
