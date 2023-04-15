/*const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}*/

/*const number = 24

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i + "!!!!!!")
  } else {
    console.log(i)
  }
}*/

/*const genkiFunction = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!!!!")
    } else {
      console.log(i)
    }
  }
}*/
/*
const FizzBuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

const genkifun = function (number) {
  for (let i = 1; i <= number; i++) {
    if (/3/.test(i) === true) {
      console.log(i + "!!!!!!")
    } else {
      console.log(i)
    }
  }
}
*/
/*let count = 0

const countUp = function () {
  // count を更新
  // count += 1
  // // count を秒単位にして表示
  // count = count / 100
  count += 1

  if(count % 3000 === 0){
    console.log(count / 100 + "!!!!!!!!!")
  }
  //console.log(`${count % 3000 === 0 ? count / 100 + "!" : count / 100}`)
}

const countfunction = function (n) {
  // for (let i = 0; i <= n; setInterval(countUp, 10)) {
  //   if (count % 3000) {
  //     console.log(count + "!!!!!!")
  //   } else {
  //     console.log(count)
  //   }
  // }
  const clearId = setInterval(() => {
    countUp()
    if (count >= 1000 * n) clearInterval(clearId)
  }, 10)
}*/

/*const genkifunction = function(n){
  for(i = 0; i <= n; i++)
}*/

// 練習問題 １
//const plus1 = function (x) {
//  return x + 1
//}
// 関数名:
// 引数:
// 返り値:

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...

// f2: 1, 10, 100, 1000, 10000, ...

// f3: 2, 14, 107, 1010, 10013, ...

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
