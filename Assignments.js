//Assignment 1
//Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not.
function number(num){
    if(num>0){
        return "Positive";
    }
    else{
        return "Negative";
    }
}
console.log(number(2));

//conditional
// function number(num){
//     console.log((num>0)?"Positive":"Negative");
// }
// number(2);

//Assignment 2
//Write a JavaScript Function to find the largest number in an array given as the parameter(Use arrow function)
let largest = (numbers) => {
    let large = numbers[0]
    for(let i=0;i<4;i++){
        if(numbers[i]>large){
            large = numbers[i];
        }
    }
    return large;
}
console.log(largest([3,8,7]))

//Assignment 3
//Write a program to find the area of a cylinder using JavaScript objects(radius, height) and the area function should be in the object).
let areaVal = {
    radius : 2,
    height : 3,
    area : function(){
        return 3.14*areaVal.radius*areaVal.radius*areaVal.height;
    }

}
console.log(areaVal.area())

//Assignment 4
//Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function.(Use this keyword)
let square = {
    length:3,
    breadth:3,
    area1:area5
}

let rectangle = {
    length:4,
    breadth:3,
    area2:area5

}

function area5(){
    return this.length*this.breadth;
}
console.log(rectangle.area2())