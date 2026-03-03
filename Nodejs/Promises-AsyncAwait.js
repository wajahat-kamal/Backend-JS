// What is promises & async await & promise.all

/*
Promise ek object hota hai jo future me milne wali value ko represent karta hai.
matlab abhi result avalible nahi lekin future me mile ga.

promise ki 3 states hoti hai:
 pending: abhi kaam hora hai.
 resolve: kaam complete hogaya.
 rejected: error agaya
*/

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetch! successfully");
        }, 1000);
    })
}
// .then & catch method
// promise().then((data) => console.log(data)).catch((err) => console.log(err))

// what is async/await
// async/await Promise ko handle karne ka clean aur readable tareeqa hai.

async function run() {
    try {
        const data = await getData();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
// run()


// what is promise.all
/*
Promise.all multiple promises ko ik sath leta hai aur sab ka resolve hone ka wait karta hai. lekin aggar ik be promise reject hojai to sab promises reject hojate hia
*/

const promise1 = Promise.resolve("Users")
const promise2 = Promise.resolve("Posts")
const promise3 = Promise.resolve("Comments")

Promise.all([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err))