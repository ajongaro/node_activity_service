const express = require('express')
const app = express()
const port = 3000


// Destructuring         // Rest
const things = [1, 2, 3, 4, 5] 
const stupid = things === [1, 2, 3, 4, 5]

const [arbitrary, , thing, ...rest] = things

// Spread, Rest, Destructuring
// const things2 = [...things] // Spreads things into things2, an exact copy in new memory location

const myThing = new Object() // {}
const myString = new String("You suck") // Sting

const somethingElse = myString === "You suck"

const dumbName = {a: {b: 2}} // resolves to what it is.
const  {a: chris} = dumbName

// const whatever2 = {...whatever} // {b: 2}

const input = 'Anthony' 

// Spread takes properties and spreads into something else
// Rest does the opposite, takes indeterminant? number of properties and gathers them into a parameter

let variable = 'Anthony' === 'Anthony' // String literal
console.log("🫣 | file: index.js:31 | variable:", variable)

// 1 === 1 // Number literal
// `` // Template literal
// `${interpolation} string` // template literal

// if (input === 'Anthony') {
//   console.log('Hey ' + input);
// } else if (input === "Chris") {
//   console.log('Hello ' + input);
// } else {
//   console.log('Who are you?');
// }

function something(array, ...another) { // Example of rest (...another) takes additional args
  const copy = [...another]
  if ( copy.length === 5) {
    array.pop()
  } else {
    console.log('NAH')
  }
}

app.get('/', (req, res) => {
  res.status(200).send([1,2,3])
})

app.get('*', (req, res) => {
  res.status(404).send("You killed our love fern")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})