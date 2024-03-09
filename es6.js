// console.log('es6.js')


//------1  Template Sting `` 
const about = {
    name : " Jahid", 
    designation : "Web Develoepr",
    language : ["JavaScript", "PHP", "Python"]
}
const paragraph = `Hi..! Its me ${about.name} a ${about.designation}. I'm Learning ${about.language[0]}`;
// console.log(paragraph); //Hi..! Its me  Jahid a Web Develoepr. I'm Learning JavaScript


//------2 ARROW FUNCTION 

const anynymousFunc = () => 55;

const nonPrmFnc = num => num +10;

const oneLineReturn = x => x % 2 == 0;

const withThreePrm = (x,y,z) => x+y+z;

const multilineFunc = (one,two, three, four) => {
    const add = one + two + three + four;
    return add / one;
}

// console.log(nonPrmFnc(2))


const array  =  [1,2,3,5,23,56];
array.push(42)
// console.log(array)

const newArr = [...array,400]; //copy of array

// console.log(newArr)