function complexCalculation(x) {
    // A dummy complex calculation
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * i;
    }
    return result;
}

function countAndLog() {
    const startTime = process.hrtime();
    for (let i = 1; i <= 1000000; i++) {
        if (i % 10000 === 0) {
            console.log("Count:", i);
        }
        // Adding a complex calculation
        complexCalculation(1000);
    }
    const elapsedTime = process.hrtime(startTime);
    console.log("Elapsed time:", elapsedTime[0] + elapsedTime[1] / 1e9, "seconds");
}

countAndLog();

exports.countAndLog = countAndLog;
