import {getCode} from "../API/log.js";

export function createModalAuthorizationPage(){
    let modal = document.createElement("div")
    modal.className = "modal open"
    modal.id = "authModal"
    document.body.append(modal)

    let modalBox = document.createElement("div")
    modalBox.className = "modalBox"
    modal.appendChild(modalBox)

    let title = document.createElement("div")
    title.className = "upSpace mdl"
    modalBox.appendChild(title)

    let titleName = document.createElement("titleName")
    titleName.className = "left"
    titleName.innerText = "Авторизация"
    title.appendChild(titleName)

    let closeButton = document.createElement("button")
    closeButton.className = "right"
    closeButton.innerText = "x"
    closeButton.addEventListener("click", ()=>{
        modal.className = "modal"
    })
    title.appendChild(closeButton)

    let authForm = document.createElement("form")
    authForm.className = "form"
    modalBox.appendChild(authForm)
    authForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let input = document.getElementById("inputEmail")
        getCode(input.value)
    })

    let label = document.createElement("label")
    label.innerText = "Почта:"
    label.htmlFor = "inputEmail"
    authForm.appendChild(label)

    let br = document.createElement("br")
    authForm.appendChild(br)

    let inputName = document.createElement("input")
    inputName.id = "inputEmail"
    inputName.className = "input full"
    authForm.appendChild(inputName)

    authForm.appendChild(br)

    let getButton = document.createElement("button")
    getButton.className="bigButton"
    getButton.type = "submit"
    getButton.style.margin = "0 22px 0 0"
    getButton.innerText = "Получить код"
    authForm.appendChild(getButton)

    let enterButton = document.createElement("button")
    enterButton.className="bigButton"
    enterButton.innerText = "Ввести код"
    authForm.appendChild(enterButton)

    enterButton.addEventListener("click",(e)=>{
        e.preventDefault()
        let authModal = document.getElementById("authModal")
        authModal.className = "modal"
        let codeModal = document.getElementById("codeModal")
        codeModal.className = "modal open"
    })
}