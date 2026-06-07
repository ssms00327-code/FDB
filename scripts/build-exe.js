#!/usr/bin/env node

/**
 * Build script for creating Windows EXE executable
 * Run: npm run build:win
 */

const { execSync } = require('child_process');

console.log('🔨 Building Financial Dashboard...\n');

try {
  // Build React app
  console.log('📦 Building React application...');
  execSync('vite build', { stdio: 'inherit' });

  // Build Electron EXE
  console.log('\n⚙️  Building Electron application...');
  execSync('electron-builder --win', { stdio: 'inherit' });

  console.log('\n✅ Build complete! EXE file created in dist/');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
