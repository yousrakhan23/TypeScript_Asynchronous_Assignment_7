

// .......................................... Question # 4 ..................................................

// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = "success"
            if (isSuccess) {
                resolve("Data fetched successfully");

            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError().then((Response) => {
    console.log(Response)
}).catch((error) => {
    console.log(error)
})