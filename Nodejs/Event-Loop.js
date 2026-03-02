// what is event loop in nodejs

/*
Event loop ik mechanism hai jo nodejs ko non-blocking banata hia, yani aggar koi heavy task ajai to nodejs
ose background me shift karta hai take main kaam nahi ruke aur app fast chale.

1. nodejs ik waqat me ik kaam karsakta hai isliye event loop ik manager ki tara kaam karta hai.
2. aggar koi heavy task ajata hai jaise database se data read karna to nodejs ose background me karke agla kaam shoro karta hai.
*/


console.log("1");

setInterval(() => {
    console.log("2");
}, 2000);

console.log("3");
console.log("4");

