
let word = "automation";

// First Way
function reverseStringUsingBuiltInMethods(input){
    if(typeof input !== "string"){
        throw new Error("Input should be String");
    }
    return input.split("").reverse().join("");
}

let reverse = reverseStringUsingBuiltInMethods(word);
console.log(`Reverse string for ${word} is: ${reverse}`);

// Second Way
function reverseStringUsingForLoop(input){
    let rev = "";
    for(let i = input.length - 1; i >= 0; i--){
        rev += input.charAt(i);
    }
    return rev;
}

console.log(`Reverse String using For Loop for ${word} is: ${reverseStringUsingForLoop(word)}`);

// Third Way
function reverseStringUsingForOfLoop(input){
    let rev = "";
    for(let char of input){
        rev = char + rev;
    }
    return rev;
}

console.log(`Reverse String using For Of Loop for ${word} is: ${reverseStringUsingForOfLoop(word)}`);

// Fourth Way
function reverseStringUsingForInLoop(input){
    let rev = "";
    for(let index in input){
        rev = input[index] + rev;
    }
    return rev;
}

console.log(`Reverse String using For In Loop for ${word} is: ${reverseStringUsingForInLoop(word)}`);

// Similary we can also use the While, Do While loops to get Reverse String, buts its not recommended.