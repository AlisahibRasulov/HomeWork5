//! TASK 1

//! version 1 
// const d = new Date().toLocaleDateString('az-AZ');
// let arr = d.split('-');
// let result = arr[1] + '/' + arr[2] + '/' + arr[0];
// console.log(result);

//! version 2 
const d = new Date().toLocaleDateString('az-AZ');
// console.log(d)
let year = d.slice(0,4);
let month = d.slice(5,6);
let day = d.slice(7,8);

let result = month + '/' + day + '/' + year;
console.log(result);
