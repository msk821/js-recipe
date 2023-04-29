const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  const text = memoinput.value
  console.log(text)
  const card = document.createElement("div")
  card.textContent = text
  const deletebutton = document.createElement("button")
  deletebutton.textContent = "削除"
  deletebutton.onclick = function () {
    card.remove()
    deletebutton.remove()
  }
  memocontainer.append(card)
  memocontainer.append(deletebutton)

  memoinput.value = " "
}
