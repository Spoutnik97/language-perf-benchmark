# Usage

1. Compile the rust code : `cargo build --release`
2. Compile the c++ code : `g++ -o cpp_executable cpp_code.cpp`
3. Run the benchmark script : `python3 benchmark.py`

# Test 1 (simple count to 100 000 000)

## Goal

Test the speed of the different languages to count to 100 000 000

Python Elapsed Time: 8.292240858078003 seconds
JavaScript Elapsed Time: 0.4416220188140869 seconds
Rust Elapsed Time: 0.14258217811584473 seconds
C++ Elapsed Time: 0.35025882720947266 seconds

# Test 2 (complex calculation for 100 000)

## Goal

Is the nature of the calculation change the result ?

## Measures

**First test**

Python Elapsed Time: 9.961721181869507 seconds
JavaScript Elapsed Time: 0.24201107025146484 seconds
Rust Elapsed Time: 0.27815914154052734 seconds
C++ Elapsed Time: 0.31627488136291504 seconds

**Second test**

Python Elapsed Time: 10.010384798049927 seconds
JavaScript Elapsed Time: 0.24254488945007324 seconds
Rust Elapsed Time: 0.0064618587493896484 seconds
C++ Elapsed Time: 0.17774510383605957 seconds

## Conclusion

The benchmark is quite consistent, the nature of the calculation does not change the result.
But the rust code is realy faster on the second execution. Why ?

# Test 3 (complex calculation for 1 000 000)

## Goal

Test the speed of the different languages to do a complex calculation for 1 000 000

## Measures

**First test**

Python Elapsed Time: 100.53298687934875 seconds
JavaScript Elapsed Time: 1.4667677879333496 seconds
Rust Elapsed Time: 0.2866818904876709 seconds
C++ Elapsed Time: 1.8330438137054443 seconds

**Second test**

Python : not tested, too long
JavaScript Elapsed Time: 1.495237112045288 seconds
Rust Elapsed Time: 0.008568763732910156 seconds
C++ Elapsed Time: 1.6940128803253174 seconds

## Conclusion

Python is too slow for this kind of calculation
Rust is the fastest, but the second test is quite faster than the first one
C++ is slower than Rust
JavaScript is quite good. It could be a good choice for most of the cases

# Test 4 (complex calculation for 1 000 000 with benchmark.js)

## Goal

Is a js script to benchmark change the result ?

## Measures

Python Elapsed Time: 100.288 seconds
JavaScript Elapsed Time: 1.299 seconds
Rust Elapsed Time: 0.021 seconds
C++ Elapsed Time: 1.327 seconds

## Conclusion

The benchmark script does not change the result

# Test 5 (complex calculation for 1 000 000 with benchmark_jsChildProcess.js)

## Goal

understand if spawning a child process for each calculation is faster than the function import

## Measures

Child process Elapsed Time: 1.485 seconds
Import javascript Elapsed Time: 1.344 seconds

## Conclusion

The child process is slower than the import function : 0.1s
But it is quite close, and it is a good way to run javascript code in parallel
