const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong!"))
        // resolve("Here the data comes...")
    }, 3000);
})

promise.then(response => {
    console.log(response);
})
    .catch(err => console.log(err));