// ..................................... Question # 5 ..................................................
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function executeSequentially() {
    var fetchData = function () {
        return new Promise(function (resolve, reject) {
            resolve("Data fetched successfully");
        });
    };
    var processData = function () {
        return new Promise(function (resolve, reject) {
            reject("Data process failed");
        });
    };
    fetchData().then(function (response) {
        console.log(response);
        processData().catch(function (error) {
            console.log(error);
        });
    });
}
executeSequentially();
