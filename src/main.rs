use std::time::Instant;

fn complex_calculation(x: usize) -> u64 {
    // A dummy complex calculation
    let mut result = 0;
    for i in 0..x {
        result += i * i;
    }
    result.try_into().unwrap()
}

fn count_and_log() {
    let start_time = Instant::now();
    for i in 1..=1000000 {
        if i % 10000 == 0 {
            println!("Count: {}", i);
        }
        // Adding a complex calculation
        complex_calculation(1000);
    }
    let elapsed_time = start_time.elapsed().as_secs_f64();
    println!("Elapsed time: {} seconds", elapsed_time);
}

fn main() {
    count_and_log();
}
