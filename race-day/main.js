let raceNumber = Math.floor(Math.random() * 1000) 

var didRegister = 'false'

var age = 18

if (didRegister === 'true' && age >= 18){
    raceNumber += 1000
    console.log(`You will be racing at 9:30 a.m! Your race number is ${raceNumber}`)
} else if (didRegister === 'false' && age >= 18) {
    console.log(`You will be racing at 11:00 a.m! Your race number is ${raceNumber}`)
} else if (age < 18) {
    console.log(`You will be racing at 12:30 p.m! Your race number is ${raceNumber}`)
}
