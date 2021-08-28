  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
/* The 'reduce' method takes 2 parameters, acc for accumulator & curr for current value.
The acc stores the value that will be returned from the reduce method i.e it will 
accumulate & keep track of the sum as the callback function is executed on each array element.
The 2nd parameter i.e current value represents the current array item that the callback 
function is being run on */
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log("Sum is: ", sum); 

/* Alternative way: We'll break down the 2nd line & expand the 3rd line above to see how the acc works */
/* This function executed 4 times even though there are 5 elements in the array of numbers. This is bcos
the reduce method actually takes a second parameter which is the initial value to use as the accumulator &
if it's not specified, the accumulator will default to the 1st element in the array & then executes 4 times */  
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
  /* Using initial value is a good way to add more to a previously calculated subtotal, add more items to an existing array or inject
  additional properties into an existing object. */
}, 0); // Any number we specify here as the initial value is where the reduce method will start the summing process from, it must be explicitly stated or else the accumulator will default to the 1st element in the array.
console.log("Sum2 is: ", sum2);

/* ANOTHER SIMPLER & CLEANER ONE LINER WAY */
/* Note that the comma is separating the 1st & 2nd parameters to reduce() 
and also the callback function & the initial accumulator value */
const nums3 = [0, 1, 2, 3, 4];
let sum3 = nums3.reduce((acc, curr) => acc + curr, 0);
console.log("Sum3 is: ", sum3);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property i.e totalling the value of a specific property in an array of objects.


// Grouping by a property, and totaling it too
