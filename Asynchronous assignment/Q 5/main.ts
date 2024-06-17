
// ..................................... Question # 5 ..................................................


// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

function executeSequentially (){
    let fetchData = () => {
        return new Promise ((resolve:any , reject:any)=>{
            resolve("Data fetched successfully")
        })
    };
    let processData = () => {
        return new Promise((resolve:any , reject:any)=>{
            reject("Data process failed")
        })
    };

    fetchData().then((response)=>{
        console.log(response);
        processData().catch((error)=>{
            console.log(error)
        })
    })
}
executeSequentially();