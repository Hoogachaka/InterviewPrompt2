const array = [1, 2, 3];
const newArray = [];

console.log(`The input array is ${array}`)

const functionMath = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]} ^2 = ${array[i]*array[i]}`);
        newArray.push(array[i]*array[i]);
    }
    console.log(newArray)
    let sum = 0;
    for (const value of newArray) {
        sum += value;
    }
    console.log(`The sum of the values in the new array is ${sum}`)
}

functionMath(array)