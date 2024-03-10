// console.log("Storage.js")


const addLocalStorage = () => {
    
        const name = document.getElementById('name');
        const nameValue =  name.value;
        const value = document.getElementById('value');
        const valueValues =value.value;
        
        // ADD LS TO SRINGIFY 
        const  getValue =  JSON.stringify(valueValues);
        console.log(getValue);
    
        localStorage.setItem(nameValue, getValue);
    }   