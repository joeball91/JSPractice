//my age is 30
const myAge = 30;

//contingent to change - puppy years is 2
var earlyYears = 2;

earlyYears *= 10.5;

//later years will be age minus two
var laterYears = myAge - 2;

//equivalent to dog years after 2
laterYears *= 4;

//age in dog years is early plus later years
var myAgeInDogYears = earlyYears + laterYears;

var myName = 'Joe'.toLowerCase();

//putting it all together with variables replaced
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
