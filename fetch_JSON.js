// console.log('fetch_JSON.js')



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

// fetch('url')
// .then (response => response.JSON())
// .then(data => console.log(data))
// .catch(err => console.error(err))


const convertSting = JSON.stringify(person)
// console.log(convertSting)  
    /* -- Result : 
        {"name":"Dhon Doe","age":20,"Language":["JavaScript","TypeScript","PHP"],"car":{"brand":"Ferrari","color":"Red","transmission":["Automatic","Semi-Automatic "],"OtherSpecification":{"drive":"4our Wheel Drive","hp":2000}}} 
    
    */ 


const convertParse = JSON.parse(convertSting);
// console.log("Parse",convertParse) 
           /**
            * Parse {
                      name: 'Dhon Doe',
                      age: 20,
                      Language: [ 'JavaScript', 'TypeScript', 'PHP' ],
                      car: {
                        brand: 'Ferrari',
                        color: 'Red',
                        transmission: [ 'Automatic', 'Semi-Automatic ' ],
                        OtherSpecification: { drive: '4our Wheel Drive', hp: 2000 }
                      }
                    }
                 * / 



const keyObj = Object.keys(person);
// console.log(keyObj) //Result  : [ 'name', 'age', 'Language', 'car' ]


const keyValue = Object.values(person);

// console.log(keyValue)  
                      /**Result  : 
                  * [
                            'Dhon Doe',
                            20,
                        [ 'JavaScript', 'TypeScript', 'PHP' ],
                      {
                        brand: 'Ferrari',
                        color: 'Red',
                        transmission: [ 'Automatic', 'Semi-Automatic ' ],
                        OtherSpecification: { drive: '4our Wheel Drive', hp: 2000 }
                      }
                    ]
                     
                    */


                    
    const product =  [
        {name : "Mobile", price : 1200, brand : "Apple", color : "Gold" },
        {name : "Laptop", price : 1350, brand : "Apple", color : "Black" },
        {name : "Watch", price :689, brand : "Samsung", color : "green" },
        {name : "Mobile", price : 4000, brand : "Google", color : "Silver" },
        {name : "PC", price : 3870, brand : "Google", color : null },
    ]

    const newProduct = {name : "Mobile", price : 1600, brand : "X", color : "Purple" }

    const updateClone = [...product, newProduct];

    // console.log(updateClone)
        // Result : 
               // [
                   // { name: 'Mobile', price: 1200, brand: 'Apple', color: 'Gold' },
                   // { name: 'Laptop', price: 1350, brand: 'Apple', color: 'Black' },
                   // { name: 'Watch', price: 689, brand: 'Samsung', color: 'green' },
                   // { name: 'Mobile', price: 4000, brand: 'Google', color: 'Silver' },
                   // { name: 'PC', price: 3870, brand: 'Google', color: null },
                   // { name: 'Mobile', price: 1600, brand: 'X', color: 'Purple' }
               //   ]



        const filterOutMobile = product.filter(p => p.name !=="Mobile")
        console.log(filterOutMobile)
                         //Result :
                            // [
                            //     { name: 'Laptop', price: 1350, brand: 'Apple', color: 'Black' },
                            //     { name: 'Watch', price: 689, brand: 'Samsung', color: 'green' },
                            //     { name: 'PC', price: 3870, brand: 'Google', color: null }
                            // ]


