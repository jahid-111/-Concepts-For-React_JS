// console.log('other_exp.js')



const money = 100;

    if(money){ //True 
        // console.log("Yes... Available") //Result : Yes... Available
    } else {
        // console.log('Not...Available')
    }


    if(!money) {  // False - Convert (Negation with variable ) 
        // console.log('Not...Available')
    } else {
        //   console.log('Yes...Available') //Result : Yes...Available
    }




    const wallet = 100;
    let getResult;
        if(200 <= wallet) {
            // getResult = "Buy Special Something";
        } else if (64 <= wallet) {
            // getResult = "Biriyani";
        } else {
            // getResult = "You Don't Have Money";
        }
    // console.log(getResult) //Result : Biriyani

    let expenseOn = (300 >= wallet && 2000 > wallet) ? "Special" : "Cheep";
    // console.log(expenseOn) //Result : Special

    const userInfo = !!false;
    const showUser = () => console.log("Display User");
    const hideUser = () => console.log("Hide User")
    // userInfo ? showUser() : hideUser() //Result : Hide User
    userInfo && hideUser() // not Execute 
    userInfo || showUser() // Result : Display User 

    const numString =  "34";
    const makeNum = + numString; //Convert Sting to Number
    // console.log(makeNum) //Result : 34 


    const strNum = 23;
    const makeStr =  strNum  + ""; // Convert Number to String 
    // console.log(makeStr) //Result : 23