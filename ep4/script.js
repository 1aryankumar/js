// let a = 1;
// console.log(a);

// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

let obj = {
    name: "aryan",
    age: 21,
    role: "admin",}

    for (const key in obj) {
       
            const element = obj[key];
            console.log(key,element);
            
        
    }