const nodeMajorVersion = parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajorVersion < 8) {
  console.error('Please install Node.js version 8 or above.');
  //throw new SystemError('The current version of Node.js that you have is unsupported. Please install version 8 or above.');
  process.kill(process.pid, 'SIGKILL');
}