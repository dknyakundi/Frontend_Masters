// console.log('Hello from Frontend Masters')

// const firstName = "Daniel"
// const lastName = "Nyakundi"

// const sentence = "Hello " + firstName + " " + lastName + "! How are you!"
// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`

// console.log(sentence)
// console.log(sentenceWithTemplate)

// const isSkyBlue = true

// if (isSkyBlue === true) {
//     console.log("Yay! The sky is blue!")
// } else {
//     console.log("The sky is not blue!")
// }

//Task for loops
// In your experiments.js,

// Write some code that declares two variables, character and timesToRepeat.
// Using a loop, repeat that character that many times and then console.log it.
// Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log 'fffff'.
// Try a few different combinations to make sure you got it right e.g. 'a' and 10, 'c' and 100, '🐶' and 3.


const timesToRepeat = 100
const character = "🐶"

let answer = ""

for (let i = 0; i < timesToRepeat; i++) {
    answer = answer + character
}

console.log(answer)