# CI/CD Setup Guide for GDigital Website

## Overview

This project uses GitHub Actions for automatic deployment to production when code is pushed to the `main` branch.

## Features

- ✅ Automatic deployment on push to `main`
- ✅ Version numbering (v1.0.x)
- ✅ Version display in footer
- ✅ Docker container rebuild
- ✅ Deployment verification
- ✅ Zero-downtime deployment

## Setup Instructions

### 1. Generate SSH Key for GitHub Actions

On your server:

```bash
# Generate a new SSH key (no passphrase)
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions_key -N ""

# Add the public key to authorized_keys
cat ~/.ssh/github_actions_key.pub >> ~/.ssh/authorized_keys

# Display the private key (you'll need this for GitHub)
cat ~/.ssh/github_actions_key
```

### 2. Configure GitHub Repository Secrets

Go to your GitHub repository: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `SERVER_HOST` | `78.47.75.121` | Your server IP address |
| `SERVER_USER` | `root` | SSH username |
| `SSH_PRIVATE_KEY` | *paste private key* | Contents of `~/.ssh/github_actions_key` |
| `SERVER_PORT` | `22` | SSH port (optional, defaults to 22) |

### 3. Test SSH Connection

From your local machine or another server:

```bash
ssh -i path/to/private/key root@78.47.75.121
```

If successful, GitHub Actions will be able to connect.

### 4. Push to Main Branch

```bash
git add .
git commit -m "Setup CI/CD pipeline"
git push origin main
```

The workflow will automatically trigger and deploy your changes.

## How It Works

### Workflow Trigger

The workflow triggers on every push to the `main` branch:

```yaml
on:
  push:
    branches:
      - main
```

### Version Numbering

Version format: `v1.0.{run_number}`

- **Major**: 1 (manual updates for major releases)
- **Minor**: 0 (manual updates for minor releases)
- **Patch**: Auto-incremented GitHub run number

Example versions:
- First deployment: `v1.0.1`
- Second deployment: `v1.0.2`
- After manual update: `v2.0.1`

### Deployment Steps

1. **Checkout code**: Gets latest code from repository
2. **Generate version**: Creates version number based on build
3. **SSH to server**: Connects to your server securely
4. **Pull changes**: Updates code on server
5. **Create version file**: Generates `public/version.json`
6. **Rebuild Docker**: Rebuilds container with latest code
7. **Verify**: Checks if container is running
8. **Notify**: Reports success or failure

### Version Display

Version information appears in the footer:

```
Version v1.0.123 • Build abc1234 • 2026-02-16
```

The version is fetched from `/api/version` endpoint.

## Manual Deployment

If you need to deploy manually:

```bash
cd /var/www/gdigital-website
git pull origin main
docker-compose down
docker-compose up -d --build
```

## Monitoring Deployments

### View GitHub Actions

1. Go to your repository on GitHub
2. Click **Actions** tab
3. See all workflow runs and their status

### View Server Logs

```bash
# Docker logs
docker-compose logs -f

# Nginx logs
tail -f /var/log/nginx/gdigital.pk_access.log
```

### Check Version

Visit: `https://gdigital.pk/api/version`

Or check the footer of any page.

## Troubleshooting

### Deployment Fails

**Check SSH connection:**
```bash
ssh -i ~/.ssh/github_actions_key root@78.47.75.121
```

**Check GitHub Actions logs:**
- Go to Actions tab in GitHub
- Click on failed workflow
- View detailed logs

### Container Won't Start

```bash
# Check logs
docker-compose logs

# Rebuild manually
docker-compose down
docker-compose up -d --build --force-recreate
```

### Version Not Showing

**Check if version.json exists:**
```bash
cat /var/www/gdigital-website/public/version.json
```

**Check API endpoint:**
```bash
curl https://gdigital.pk/api/version
```

## Rollback

If a deployment breaks something:

```bash
cd /var/www/gdigital-website

# Check git log
git log --oneline

# Rollback to previous commit
git reset --hard <previous-commit-hash>

# Rebuild
docker-compose down
docker-compose up -d --build
```

## Updating Version Manually

To change the major/minor version:

Edit `.github/workflows/deploy.yml`:

```yaml
env:
  VERSION: v2.0.${{ github.run_number }}  # Changed from v1.0
```

## Security Best Practices

- ✅ SSH key has no passphrase (required for automation)
- ✅ Private key stored securely in GitHub Secrets
- ✅ Key dedicated only for deployments
- ✅ Minimum permissions (can be restricted further)

## Advanced Configuration

### Add Slack Notifications

Add this step to the workflow:

```yaml
- name: Notify Slack
  if: always()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Add Health Checks

```yaml
- name: Health check
  run: |
    sleep 15
    curl -f https://gdigital.pk || exit 1
```

### Deploy to Staging First

Create separate workflows for staging and production branches.

## Files Created

- `.github/workflows/deploy.yml` - Main workflow
- `app/api/version/route.ts` - Version API endpoint
- `component/layout/Footer.tsx` - Updated footer with version
- `public/version.json` - Generated during deployment
- `CICD_SETUP.md` - This guide

## Next Steps

1. ✅ Push code to trigger first deployment
2. ✅ Verify version appears in footer
3. ✅ Monitor GitHub Actions for success
4. ✅ Test by making a small change and pushing

---

**Questions?** Check the GitHub Actions logs or server logs for detailed information.
