#!/usr/bin/env node

// Production start script for PiRaMID server
const path = require('path');

// Set environment variables for production
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || '5000';
process.env.HOST = process.env.HOST || '0.0.0.0';

console.log('Starting PiRaMID server...');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Host: ${process.env.HOST}`);
console.log(`Port: ${process.env.PORT}`);

// Add error handling
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Start the server
require('./server/server.js');