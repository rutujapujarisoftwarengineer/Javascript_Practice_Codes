// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallbacks){
//     sumCallbacks(a, b);
// }

// calculator(7, 2, sum);

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("The task is resolved");
//     reject("some error is occured");
// });


const getPromise = () => {
    return new promise((resolve , reject) => {
        console.log("Promise");
        // resolve("Sucess");
        // reject("Network error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("Rejected", err);
});
