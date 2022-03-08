input = "It's a great day to have a great day!";

vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for (let i=0; i<input.length; i++){
    for (let j=0; j<vowels.length; j++){
        if (input[i] === vowels[j]){
            if (input[i] === 'e' || input[i] === 'u')
                resultArray.push(input[i]);
            resultArray.push(input[i]);
        }          
    }
}

resultString = resultArray.join('').toUpperCase();
console.log(resultString);