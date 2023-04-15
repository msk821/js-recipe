/*
const number = 24

// n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  // n を 3 で割ったあまりが 0
  if (n % 3 === 0) {
    console.log(`${n}!!!!!!!`)
  } else {
    console.log(n)
  }
}
*/

// let count = 0
// const countUp = function () {
//   if (count !== 0 && count % 100 === 0) {
//     clearInterval(id)
//     id = null
//   } else {
//     count += 1
//   }
//   console.log(count / 100)
// }

// let id = null
// const genkifunction = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (id === null) {
//       id = setInterval(countUp, 10)
//     }
//   }
// }
/*
let count = 0
let id = null

const countUp = function () {
  if (count !== 0 && count % 100) {
    clearInterval(id)
    id = null
  } else {
    count += 1
  }
  console.log(count / 100)
}

const genkifunction = function (number) {
  for (let i = 1; i <= number; () => {
    if (id === null) {
      id = setInterval(countUp, 10)
    }
  } )
}
*/

let count = 0
const countUp = function () {
  count += 1
  console.log(count / 100)
}

let id = null
const genkiFunction = function (n) {
  if (count / 100 <= n && id === null) {
    id = setInterval(countUp, 10)
  } else {
    clearInterval(id)
  }
}
