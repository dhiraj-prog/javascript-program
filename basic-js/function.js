// function myFunction(){
//    console.log("today is a beautiful day");
//    console.log("we learn function in javascript");
//}

// myFunction()
// myFunction()

/* function myFunction(msg){  // msg in your parameter
    console.log(msg)
}
myFunction("development");  // development in your argument */

/* function sum(a,b){
    console.log(a+b)
}
sum(2,3)
sum(6,4) */
   
/* function sum(a,b){
    x=a+b;
    console.log("before return")
    return x;
    console.log("after return")
}
let val= sum(2,3)
console.log(val) */

/* function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}

// Test the function
console.log(countVowels("Hello World")); */

/* function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}

// Test the function
console.log(countVowels("Hello World")); */

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++;
        }   
    }
    console.log(count);
    }
countVowels("javascript")
    