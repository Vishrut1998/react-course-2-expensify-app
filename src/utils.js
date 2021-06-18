console.log('utils.js is running')


// const isAdult = (age) => {
//     if(age>18){
//         console.log('Is adult')
//     }
//     else{
//         console.log('Not An Adult')
//     }
// }

// const canDrink = (drink) => {
//     if(drink>21){
//         return true
//     }
//     else{
//         return false
//     }
// }
// const square = (x) => x * x;


const isSenior = (age) => age >= 65;

export{isSenior as default};