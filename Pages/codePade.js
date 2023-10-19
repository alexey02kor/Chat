import {saveToken} from "../API/log.js";

export function createModalCodePage(){
    let modal = document.createElement("div")
    modal.className = "modal"
    modal.id = "codeModal"
    document.body.append(modal)

    let modalBox = document.createElement("div")
    modalBox.className = "modalBox"
    modal.appendChild(modalBox)

    let title = document.createElement("div")
    title.className = "upSpace mdl"
    modalBox.appendChild(title)

    let titleName = document.createElement("titleName")
    titleName.className = "left"
    titleName.innerText = "Подтверждение"
    title.appendChild(titleName)

    let closeButton = document.createElement("button")
    closeButton.className = "right"
    closeButton.innerText = "x"
    closeButton.addEventListener("click", ()=>{
        modal.className = "modal"
    })
    title.appendChild(closeButton)

    let codeForm = document.createElement("form")
    codeForm.className = "form"
    modalBox.appendChild(codeForm)

    let label = document.createElement("label")
    label.innerText = "Код:"
    label.htmlFor = "inputCode"
    codeForm.appendChild(label)

    let br = document.createElement("br")
    codeForm.appendChild(br)

    let inputCode = document.createElement("input")
    inputCode.id = "inputCode"
    inputCode.className = "input full"
    codeForm.appendChild(inputCode)

    codeForm.appendChild(br)

    let enterButton = document.createElement("button")
    enterButton.className="bigButton"
    enterButton.type = "submit"
    enterButton.style.margin = "0 22px 0 0"
    enterButton.innerText = "Войти"
    codeForm.appendChild(enterButton)

    codeForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let input = document.getElementById("inputCode")
        saveToken(input.value)
    })
}