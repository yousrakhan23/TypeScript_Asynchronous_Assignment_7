
// ............................................. Question # 3 .............................................................


// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
    return new Promise ((resolve:any , reject:any ) =>{
      setTimeout(() => {
        resolve("Data fetched successfully!");
      } , 1000)
      console.log("Delay for 1 second.")
    });

}
fetchData().then((Response:any) => {
    console.log(Response);
});