function transformString(input) {
    const length = input.length;
    let transformedString = input;

    if (length % 3 === 0) {
        
        transformedString = transformedString.split('').reverse().join('');
    }

    if (length % 5 === 0) {
       
        transformedString = transformedString.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return transformedString;
}


const input = "Hello World";
const output = transformString(input);
console.log(output);  
