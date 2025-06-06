#!/bin/bash
set -e
 
echo "Deployment started..."

echo "Pull latest changes from main branch..."
git pull origin main
 
echo "Installing Dependencies..."
npm install --legacy-peer-deps
 
echo "Creating Production Build..."
npm run build
 
echo "Deployment Completed Successfully!"