import {changeName} from "../API/user";

export function createModalSetting(){
    let modal = document.createElement("div")
    modal.className = "modal"
    modal.id = "settingModal"
    document.body.append(modal)

    let modalBox = document.createElement("div")
    modalBox.className = "modalBox"
    modal.appendChild(modalBox)

    let title = document.createElement("div")
    title.className = "upSpace mdl"
    modalBox.appendChild(title)

    let titleName = document.createElement("titleName")
    titleName.className = "left"
    titleName.innerText = "Настройки"
    title.appendChild(titleName)

    let closeButton = document.createElement("button")
    closeButton.className = "right"
    closeButton.innerText = "x"
    closeButton.addEventListener("click", ()=>{
        modal.className = "modal"
    })
    title.appendChild(closeButton)

    let nameForm = document.createElement("form")
    nameForm.className = "form"
    modalBox.appendChild(nameForm)

    let label = document.createElement("label")
    label.htmlFor = "settingInput"
    label.innerText = "Имя в чате"
    nameForm.appendChild(label)

    let inputName = document.createElement("input")
    inputName.id = "settingInput"
    inputName.className = "input"
    nameForm.appendChild(inputName)

    let sendButton = document.createElement("button")
    sendButton.className ="send"
    sendButton.innerText = "->"
    nameForm.appendChild(sendButton)

    nameForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let input = document.getElementById("settingInput")
        changeName(input.value)
    })
}