// var fName = prompt("Enter First Name");

// var lName = prompt("Enter Last Name");

// var firstname = fName.substring(0,3).toLowerCase().replace('E','I').replaceAll('O','U');
// var lastname = lName.substring(0,3).toLowerCase().replace('E','I').replaceAll('O','U');
// var final = first + last;
// alert(final + "is your password");

// if(final.length < 6){
//     alert("Weak hehe");
// }
// else{
//     alert("Good")
// }


// function randomNumber(){
//     return (Math.floor(Math.random()*11)* 7) % 2 == 0;
//     console.log();
// ;}
// alert(randomNumber());

// let ifEven = ()=>{
//     return (Math.floor(Math.random() * 11) * 7) % 2 == 0
// }


// function areaOfSquare(side){
//     var side  = prompt('Enter a number!');
//     if(side < 0 || !side){
//         console.error('Please input a number or a number not less than 0');
//         return 0;
//     }
//     else{
//         return side * side
//     }

// }
// console.log ('Area of a square: ' + areaOfSquare());


// function areaofCircle(radius){
//     var radius = prompt('Enter a number!');
//     if(radius < 0 || !radius){
//        console.error('Please input a number or a number not less than 0');
//        return 0;
//     }
//     else{
//         area = Math.floor((radius * radius * Math.PI));
//         return area;
//     }
// }
// console.log('Area of a circle: ' + areaofCircle())



// function comparetwoFunctions(side , radius){
//     return areaOfSquare(side) < areaofCircle(radius)?true:false;
// }


// deliver();
// function deliver() {
//     var dateInput = prompt("Enter the date", "MM/DD/YY")
//     // dateInput.split
//     isValid(dateInput)
// }
// function isValid(d) {
//     let date = new Date(d);
//     let checkDate = new Date();
//     if (date.getFullYear() < 2021 && date > checkDate && date instanceof Date && !isNaN(date)) {
//         alert("The operation is successful!")
//         return true;
//     } else {
//         if (!date instanceof Date || isNaN(date)) {
//             console.log("Entered")
//             deliver();
//             // dateInput = prompt("Enter the date", "MM/DD/YY");
//         } else if (date < checkDate) {
//             alert("You can't set from a past time! :(")
//             deliver();
//         }else if (!date.getFullYear() < 2021) {
//             alert("You cannot plan that far ahead :(")
//             deliver();
//         } 
//     }
// }


function randomArraySum(n) {
    
    let field = [];

    for (let i = 0; i < n; i++) {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        field.push(randomNumber);
    }
    console.log(field);
    var minimum = Math.min.apply(null, field);
    field.splice(field.indexOf(minimum), 1);

    return field.reduce((a,b)=>{
        return a + b;
    });
}
console.log("The sum of the array is: " + randomArraySum(5))
// console.log(randomArraySum(10));

