# Quick Start Guide - GDigital Website

## 🚀 Quick Deployment (5 minutes)

### Prerequisites Check
```bash
# Check if Docker is installed
docker --version

# Check if Docker Compose is installed
docker-compose --version

# Check if Nginx is installed
nginx -v
```

### One-Command Deployment

```bash
cd /var/www/gdigital-website
sudo ./deploy.sh
```

That's it! The script will:
1. ✅ Build the Docker image
2. ✅ Start the container on port 3000
3. ✅ Configure Nginx reverse proxy
4. ✅ Verify the deployment

---

## 📋 Manual Deployment (Step by Step)

### 1. Build and Start Docker Container

```bash
cd /var/www/gdigital-website

# Build and start
docker-compose up -d --build

# Check status
docker-compose ps
docker-compose logs -f
```

### 2. Configure Nginx

```bash
# Copy nginx config
sudo cp nginx-gdigital.conf /etc/nginx/sites-available/gdigital.pk

# Enable site
sudo ln -s /etc/nginx/sites-available/gdigital.pk /etc/nginx/sites-enabled/

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Setup SSL (After DNS is pointed)

```bash
sudo certbot --nginx -d gdigital.pk -d www.gdigital.pk
```

---

## 🔍 Verification

```bash
# Check container
docker ps | grep gdigital-website

# Test locally
curl http://localhost:3000

# Test through domain (after DNS)
curl http://gdigital.pk
```

---

## 📊 Port Usage

| Service | Port | Access |
|---------|------|--------|
| Next.js App | 3000 | localhost only |
| Nginx HTTP | 80 | Public |
| Nginx HTTPS | 443 | Public |

**Available ports on your server:** 3000, 3001, 8086, 8087, 8088, 8090, etc.

**Used ports:** 80, 443, 5678, 8082, 8083, 8085, 8443, 11000

---

## 🛠️ Common Commands

### Container Management
```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# Restart
docker-compose restart

# Logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build --force-recreate
```

### Nginx Management
```bash
# Test config
sudo nginx -t

# Reload
sudo systemctl reload nginx

# Restart
sudo systemctl restart nginx

# View logs
sudo tail -f /var/log/nginx/gdigital.pk_access.log
```

---

## 🔧 Troubleshooting

### Container won't start
```bash
docker-compose logs
docker-compose down -v
docker-compose up -d --build
```

### Port 3000 already in use
```bash
# Find what's using it
netstat -tuln | grep 3000
lsof -i :3000

# Change port in docker-compose.yml if needed
```

### Nginx can't connect
```bash
# Test direct connection
curl http://127.0.0.1:3000

# Check nginx error log
sudo tail -f /var/log/nginx/error.log
```

---

## 📝 Next Steps After Deployment

1. **Point DNS**: Update your domain DNS A record to point to this server's IP
2. **Setup SSL**: Run `sudo certbot --nginx -d gdigital.pk -d www.gdigital.pk`
3. **Configure Environment**: Copy `.env.example` to `.env` and update values
4. **Setup Monitoring**: Configure log rotation and monitoring
5. **Backup**: Set up automated backups

---

## 🔐 Security Checklist

- ✅ Application runs on localhost only (not exposed)
- ✅ Nginx acts as reverse proxy
- ✅ SSL/TLS encryption (after certbot)
- ✅ Security headers configured
- ✅ Container runs as non-root user
- ✅ Docker network isolation

---

## 📞 Support

**View Logs:**
- Application: `docker-compose logs -f`
- Nginx: `sudo tail -f /var/log/nginx/gdigital.pk_*.log`
- System: `journalctl -u nginx -f`

**Health Check:**
```bash
# Container health
docker inspect gdigital-website | grep -A 10 Health

# Resource usage
docker stats gdigital-website
```

---

## 🔄 Updates

```bash
cd /var/www/gdigital-website

# Pull changes (if using git)
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build

# Or use the deploy script
sudo ./deploy.sh
```

---

## 📚 Additional Documentation

- Full deployment guide: `DEPLOYMENT.md`
- Docker configuration: `docker-compose.yml`
- Nginx configuration: `nginx-gdigital.conf`
- Environment variables: `.env.example`
