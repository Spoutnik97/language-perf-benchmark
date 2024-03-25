const { execSync } = require('child_process');

// Python
const pythonStartTime = Date.now();
execSync('python python_script.py', { stdio: 'inherit' });

const pythonElapsedTime = Date.now() - pythonStartTime;
console.log(`Python Elapsed Time: ${pythonElapsedTime / 1000} seconds`);

// JavaScript (Node.js)

const javascriptStartTime = Date.now();
execSync('node javascript_script.js', { stdio: 'inherit' });

const javascriptElapsedTime = Date.now() - javascriptStartTime;
console.log(`JavaScript Elapsed Time: ${javascriptElapsedTime / 1000} seconds`);


// Rust
const rustStartTime = Date.now();
execSync('./target/release/rust_executable', { stdio: 'inherit' });

const rustElapsedTime = Date.now() - rustStartTime;
console.log(`Rust Elapsed Time: ${rustElapsedTime / 1000} seconds`);

// C++
const cppStartTime = Date.now();
execSync('./cpp_executable', { stdio: 'inherit' });

const cppElapsedTime = Date.now() - cppStartTime;
console.log(`C++ Elapsed Time: ${cppElapsedTime/ 1000} seconds`);
