
const { execSync } = require('child_process');
const { countAndLog } = require('./javascript_script');
// JavaScript (Node.js) child process
const jsChildProcessStartTime = Date.now();
execSync('node javascript_script.js', { stdio: 'inherit' });

const jsChildProcessElapsedTime = Date.now() - jsChildProcessStartTime;

// JavaScript (Node.js) direct import
const javascriptStartTime = Date.now();
countAndLog()

const javascriptElapsedTime = Date.now() - javascriptStartTime;
console.log(`Child process Elapsed Time: ${jsChildProcessElapsedTime / 1000} seconds`);
console.log(`Import javascript Elapsed Time: ${javascriptElapsedTime / 1000} seconds`);
