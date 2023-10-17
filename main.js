import {createModalSetting} from "./settingPage.js";

let mainDiv = document.createElement('div')

let upDiv = document.createElement('div')
upDiv.className = "upSpace"
mainDiv.appendChild(upDiv)

let settingButton = document.createElement('button')
settingButton.innerText = "настройки"
settingButton.className = "left"
settingButton.addEventListener("click",()=>{
    let modal = document.getElementById("settingModal")
    modal.className = "modal open"
})
upDiv.appendChild(settingButton)

let exitButton = document.createElement('button')
exitButton.innerText = "выход"
exitButton.className = "right"
upDiv.appendChild(exitButton)

let messageSpace = document.createElement("div")
messageSpace.id = "messageSpace"
mainDiv.appendChild(messageSpace)

let messageForm = document.createElement("form")
messageForm.id = "messageForm"
mainDiv.appendChild(messageForm)

let inputMessage = document.createElement("input")
inputMessage.id = "inputMessage"
messageForm.appendChild(inputMessage)

let sendButton = document.createElement("button")
sendButton.id ="sendButton"
sendButton.innerText = "->"
messageForm.appendChild(sendButton)

document.body.append(mainDiv)

createModalSetting()