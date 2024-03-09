// console.log("one.js");

 //-----1 // ** Declare a Variable 

var name = "Dhon Doe";
const designation = "Web Developer"
let place = "Dhaka";
place = "chittagong"

//  -----2     //CONDITIONAL OPERATR  
    /**
     * 
     * >
     * <
     * ==
     * ===
     * !==
     * <=
     * >=
     * 
     * */ 


// -----3 MULTIPLEE CONDITON   with If , else 
    /**
     * && 
     * ||
     * 
     * */ 

                            // practise 

    const nameOfCar = "Fer_)rari";
    const color =  "Red";


    if (nameOfCar === "ferrari" || color === "Red") {
        // console.log(true)
    } else if (nameOfCar && "Fer_)rari") {
        // console.log("availabe")
    } else {
        // console.log('Data Not Macth')
    }


//-----4 ARRAY DECLARATION 

const productNumbers = [2,3,4,5,7];
// console.log(productNumbers.indexOf(7)) result : 4
// console.log(productNumbers.length) result : 5
// productNumbers.push(89) result :[ 2, 3, 4, 5, 7, 89 ]
// productNumbers[0] = 100 [ 100, 3, 4, 5, 7 ]

// console.log(productNumbers)


// -----5 FUNDAMENTAL BASIC LOOP 
    for (let i = 0 ; i < productNumbers.length ; i++) {
        // console.log(productNumbers[i]);
        /** Result :
         * 2
           3
           4
           5
           7
         * */ 
    }




//----6 FUNCTION

        function defineFunc (add) {
            return add +  20
        }
        const digitForFunc = 12;
        // console.log(defineFunc(digitForFunc)) result : 32    




//-----7 OBJECT DECLARATION 

const productName = {
        name : "Lenovo",
        color : "Silver",
        osSystem : "Windows",
        extraUI : ['Keyboard', 'Mouse', 'Charger']
};

// console.log(productName) 
                /** Result :
                 * {
                  name: 'Lenovo',
                  color: 'Silver',
                  osSystem: 'Windows',
                  extraUI: [ 'Keyboard', 'Mouse', 'Charger' ]
                }
                */
// console.log(productName.name) // Result : Lenovo

// console.log(productName["name"]) // Result : Lenovo (access via Prop name String)

const propName = "name" // variable for Call ovject 
// console.log(productName[propName]) // Result : Lenovo  (Access vai Variable name)