const nodeMajorVersion = parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajorVersion < 8) {
  console.error('Please install Node.js version 8 or above.');
  //throw new SystemError('The current version of Node.js that you have is unsupported. Please install version 8 or above.');
  process.kill(process.pid, 'SIGKILL');
}

const fs = require('fs');
const path = require('path');

try {
  fs.accessSync(path.join(__dirname, '..', 'node_modules'));
} catch (err) {
  console.error(`${err} | Please run npm install before attempting to start Marston.`);
  process.kill(process.pid, 'SIGKILL');
}

process.on('unhandledRejection', err => {
  console.error(`Unhandled Rejection Error: ${err.stack}`);
});

process.on('uncaughtException', err => {
  console.error(`Uncaught Exception Error: ${err.stack}`);
  process.exit(1);
});

