// console.log('arratyMethood.js')


        

const product =  [

    {name : "Mobile", price : 1200, brand : "Apple", color : "Gold" },
    {name : "Laptop", price : 1350, brand : "Apple", color : "Black" },
    {name : "Watch", price :689, brand : "Samsung", color : "green" },
    {name : "Mobile", price : 4000, brand : "Google", color : "Silver" },
    {name : "PC", price : 3870, brand : "Google", color : null },
]

// console.log(product) 

const brand = product.map(p => p.brand) //Returnable 
// console.log(brand) // Result : [ 'Apple', 'Apple', 'Samsung', 'Google', 'Google' ] (Return  array)

product.forEach(p => {
    // console.log(p.brand) //Get type of  Sting 
    
    // return p; //non Returnable
});


const cheep = product.filter(p =>p.price <= 3000)
// console.log(cheep) // result : object in Arrar


const find  = product.find(p => p.name.includes('W')) 
// console.log(find) //result : { name: 'Watch', price: 689, brand: 'Samsung', color: 'green' }