
let age = 0;
let grace = 2;


 if (age+grace>=18){
     console.log("You are eligible to vote");
 }
 else if (age == 0){
    console.log("Are you kidding?");
 }
 else {
     console.log("You are not eligible to vote");
 }


//  console.log(age+grace);
//  console.log(age-grace);
//  console.log(age*grace);
//  console.log(age%grace);
//  console.log(age**grace);
//  console.log(age++);


let a=4;
let b=2;

let c = a>b?(a-b):(b-a);
/* translates to :
if a>b{
    c = a-b;
}
else{
    c = b-a;
}
*/

console.log(c);