import time


def complex_calculation(x):
    # A dummy complex calculation
    result = 0
    for i in range(x):
        result += i * i
    return result


def count_and_log():
    start_time = time.time()
    for i in range(1, 1000001):
        if i % 10000 == 0:
            print("Count:", i)
        # Adding a complex calculation
        complex_calculation(1000)
    elapsed_time = time.time() - start_time
    print("Elapsed time:", elapsed_time, "seconds")


count_and_log()
