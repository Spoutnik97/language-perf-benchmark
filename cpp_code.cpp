#include <chrono>
#include <iostream>

// A dummy complex calculation
unsigned long long complexCalculation(int x) {
  unsigned long long result = 0;
  for (int i = 0; i < x; ++i) {
    result += static_cast<unsigned long long>(i) * i;
  }
  return result;
}

int main() {
  auto start_time = std::chrono::high_resolution_clock::now();

  for (int i = 1; i <= 1000000; ++i) {
    if (i % 10000 == 0) {
      std::cout << "Count: " << i << std::endl;
    }
    // Adding a complex calculation
    complexCalculation(1000);
  }

  auto end_time = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed = end_time - start_time;
  std::cout << "Elapsed time: " << elapsed.count() << " seconds" << std::endl;

  return 0;
}
