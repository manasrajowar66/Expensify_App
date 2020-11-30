/* eslint-disable no-unused-vars */

const promise = new Promise((resolve,reject)=>{
    resolve('this is my resolve');
    reject('something went wrong!!');
});

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});