// console.log('destucturing.js')


                                     // ARRAY DESTUCTURING 


const array = [2,5,6,4,6,35]
const[x,...y] = array; //Must [] brackets  For Array  
// console.log(y) //Result  : [ 5, 6, 4, 6, 35 ]


    function destrucArr(one, two) {
        const num = [one,two];
        return num;
    }
    // console.log(destrucArr(3,56)) //Result : [ 3, 56 ]

  
                                     // OBJECT DESTUCTURING 




const person ={
        name : "Dhon Doe",
        age : 20,
        Language : ['JavaScript', 'TypeScript', "PHP"],
        car : {
            brand : 'Ferrari',
            color : 'Red',
            transmission  : ['Automatic', 'Semi-Automatic '],
            OtherSpecification : {
                drive : "4our Wheel Drive",
                hp :2000
            }   
        }
}   

const {name} = person; //Must {} brackets  For Object
// console.log(name)  //Result : Dhon Doe

const {Language} = person;
// console.log(Language) //Result : [ 'JavaScript', 'TypeScript', 'PHP' ]
const [firstLang,secondLang, ThirdLang]= Language; //**get Array From Object and deStricturing the array */
// console.log(secondLang) //Result : TypeScript

const {brand}= person.car;
// console.log(brand) //Result : Ferrari 

const {drive} =  person.car.OtherSpecification;
// console.log(drive) //Result :  4our Wheel Drive