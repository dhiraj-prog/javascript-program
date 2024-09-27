1. Javascript :-

- javascript is used for building logics of a web page.
- javascript is a high level programming language, used in both client side and server side.
- javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
- now we used javascript version 6 i.e., ES6 (echma-script 6).
- In another way we called ES6 as a vanilla javascript.
- Node js is the runtime enviroment of javascript.

Variable :-

- variable is a container to store some data.
- In javascript there are 3 types of variable are there...

1. let :-

- let is a type of variable whhich is used for changing the variable name later.
- now these days, most of the cases we used let for creating variable.
- let is a block scope code so we have been used let for most of the cases.

2. var :-

- var is a type of variable which is also used for changing the variable in later stage.
- var is used in oldest browser so now a days we are don't use ver most of the cases.

3. const :-

Rules for creating variable name :-

- variable names are case sensative "a", & "A" is different.
- only letter, digit, underscore & special character is allowed, (not even white space).
- only letter, underscore or special character should be 1st character only.
- reserved words cannot be a variable name. ex- for, while, switch, etc.

Datatypes in JS :-

- datatypes is an attributes associated with a piece of data that tells a computer system how to interprit  its value.
- in datatype we use type of operator to know that what type of data it is.
- mainlly in javascript there are two types of datatypes we use :-

1. primitive datatype :-
 
- in javascript there are 7 types of primitive datatypes we use :-
1. Number - Number are the type of datatypes those it contains some numerical values.
2. Boolean - In boolean datatypes we get boolean value like true/false.
3. Undefined - data is not define.
4. Null - In this datatypes we get null for value means nothing.
5. BigInt - In bigInt we will get the big integer value (-999999999 to +999999999) on the above.
6. String - string is a type of datatypes that can hold some character like names or word etc.
7. Symbol - In symbol we get one symbol for more then one value.

2. reference  datatypes :-

- Reference datatypes are the type of datatype which can hold multiple element in a single time.
- Reference datatypes are -> array, object, function.

1. Array :-

- array is a datatype where we can store similar type of data is a contigious memory location.
- array indexing starts from "0".

ex- let arr = ["ram", "hari", "sita", "bharat"]
                 0       1       2        3    

2. Object :-

- objest is reference type datatype where we can store more thean one element in a single entity.
- mainly object are working on (key:value) pair.

ex-

let emp1 = {
    "name" : "sonu kumar",
    "age" : "76",
    "address" : "bbsr",
    "mobile no." : "8393937937",
    "salary" : "50000",
}

Conditional statement :-

- to impliment some conditions in the code.
- there are 3 types of conditional statement are there
1. If conditions :-

- If conditions is true then ststement is true.
- syntax :-
if(condition){
    ststement
}

2. If-else conditions :-

- If conditions is true then ststement is true otherwise false.
- syntax :-
if(condition){
    ststement
} else {
    statement
}

3. If-elif conditions :-

- Its check the conditions multiple times, where the conditions is true.
- syntax :-
if(condition){
    statement
} else if(condition){
    ststement
} else if(condition){
    ststement
} else {
    ststement
}

practice question :-

- write a code which can gives grades to students according to their scores :-
1. 80 - 100 (A)
2. 70 -79 (B)
3. 60 - 69 (C)
4. 50 - 59 (D)
5. 0 - 49 (FAIL)
