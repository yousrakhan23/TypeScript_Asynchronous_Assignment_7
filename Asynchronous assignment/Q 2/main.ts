
// ....................................... Question # 2 ......................................................


// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask (){
    setTimeout(()=> {
        console.log("Green Tea");
    } , 1000);
    console.log(["Biryani" , "Kabab" , "BBQ"])
};
simulateTask();