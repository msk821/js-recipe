const inputElement = document.getElementById("innput-todo")
const container = document.getElementById("cards-container")
const addbutton = document.getElementById("add-button")
/*
addbutton.onclick = function () {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  // todo を card の中に追加する
  card.append(todo)

  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""

  const deletebutton = document.createElement("div")
  deletebutton.className = "delete"

  deletebutton.onclick = function () {
    card.remove()
  }
  card.append(deletebutton)
}*/

addbutton.onclick = function () {
  const card = createcard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}
if (event.key === "Enter") {
  const card = createcard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

const createcard = function () {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.append(card)

  const deletebutton = document.createElement("div")
  deletebutton.className = "delete"

  deletebutton.onclick = function () {
    card.remove()
  }

  card.append(deletebutton)

  return card
}
