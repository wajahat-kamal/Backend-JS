// What is Event Loop in Node.js?

/*
Event Loop Node.js ka core mechanism hai jo asynchronous
aur non-blocking execution ko possible banata hai.

Node.js single-threaded hota hai, yani ek waqt me
sirf ek kaam call stack par execute karta hai.

Lekin jab koi asynchronous task aata hai (jaise timer,
file system, database call, API request), to Node.js
us task ko OS ya libuv ko delegate kar deta hai.

Jab wo task complete ho jata hai, uska callback
event loop ki queue me add ho jata hai.

Event loop continuously:
1. Call stack check karta hai (khaali hai ya nahi)
2. Phir queues se callbacks uthata hai
3. Aur unhe execute karta hai

Isi wajah se Node.js non-blocking behave karta hai.
*/


console.log("1");

setInterval(() => {
    console.log("2");
}, 2000);

console.log("3");
console.log("4");
