// What is promises

/*
Promise ek object hota hai jo future me milne wali value ko represent karta hai.
matlab abhi result avalible nahi lekin future me mile ga.

promise ki 3 states hoti hai:
 pending: abhi kaam hora hai.
 resolve: kaam complete hogaya.
 rejected: error agaya
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetch! successfully");
    }, 1000);
})
promise.then((data) => console.log(data)).catch((err) => console.log(err))