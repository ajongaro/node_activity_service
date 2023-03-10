const express = require('express')
const app = express()
const port = 3000

const things = [1, 2, 3, 4, 5] 
const [first, , third,...rest] = things

// Spread, Rest, Desetructuring

const things2 = [...things]

const myThing = new Object() // {}

const dumbName = {a: {b: 2}} // resolves to what it is.
const  {a: chris} = dumbName

console.log(chris)

// const whatever2 = {...whatever} // {b: 2}

const input = 'Anthony' 

// Spread takes properties and spreads into something else
// Rest does the opposite, takes indeterminant? number of properties and gathers them into a parameter


// 'Anthony' // String literal
// 1 // Number literal
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
  console.log("🚀 ~ file: index.js:41 ~ something ~ another:", another)
  const copy = [...things]
  if (copy.length === 5) {
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