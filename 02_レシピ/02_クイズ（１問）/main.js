const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

choice1.remove()
choice2.remove()
choice3.remove()
choice4.remove()

const quiz = {
  choices: [
    {
      text: "岡崎紗絵",
      feedback: "残念！紗絵ちゃんも可愛くて大好きだけど一番は違う人",
    },
    {
      text: "生田絵梨花",
      feedback: "正解！やっぱりいくちゃんしか勝たんよな！",
    },
    {
      text: "ガニメデ",
      feedback: "残念！ガニメデ何かわからない！",
    },
    {
      text: "新垣結衣",
      feedback:
        "残念！ガッキーも可愛くて大好きだけどいっちばん好きな人は、、、",
    },
  ],
}

for (let i = 1; i <= quiz.choices.length; i++) {
  let newbutton = document.createElement("button")
  newbutton.textContent = quiz.choices[i].text
}

/*
const quiz = {
  text: "私が一番好きな人はだれでしょう",
  Image: "Ganymede.jpg",
  choices: [
    {
      text: "岡崎紗絵",
      feedback: "残念！紗絵ちゃんも可愛くて大好きだけど一番は違う人",
    },
    {
      text: "生田絵梨花",
      feedback: "正解！やっぱりいくちゃんしか勝たんよな！",
    },
    {
      text: "ガニメデ",
      feedback: "残念！ガニメデ何かわからない！",
    },
    {
      text: "新垣結衣",
      feedback:
        "残念！ガッキーも可愛くて大好きだけどいっちばん好きな人は、、、",
    },
  ],
}
*/

const reloadQuiz = function () {
  quizText.textContent = "Q." + quiz.text
  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  choice1(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
