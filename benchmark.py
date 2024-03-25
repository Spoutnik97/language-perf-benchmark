import subprocess
import time

# Python
python_start_time = time.time()
subprocess.run(["python", "python_script.py"])
python_elapsed_time = time.time() - python_start_time

# JavaScript (Node.js)
javascript_start_time = time.time()
subprocess.run(["node", "javascript_script.js"])
javascript_elapsed_time = time.time() - javascript_start_time

# Rust
rust_start_time = time.time()
subprocess.run(["./target/release/rust_executable"])
rust_elapsed_time = time.time() - rust_start_time

# C++
cpp_start_time = time.time()
subprocess.run(["./cpp_executable"])
cpp_elapsed_time = time.time() - cpp_start_time

print("Python Elapsed Time:", python_elapsed_time, "seconds")
print("JavaScript Elapsed Time:", javascript_elapsed_time, "seconds")
print("Rust Elapsed Time:", rust_elapsed_time, "seconds")
print("C++ Elapsed Time:", cpp_elapsed_time, "seconds")
