export function createModalSetting(){
    let modal = document.createElement("div")
    modal.className = "modal"
    modal.id = "settingModal"
    document.body.append(modal)

    let modalBox = document.createElement("modalBox")
    modalBox.className = "modalBox"
    modal.appendChild(modalBox)

    let title = document.createElement("div")
    title.className = "upSpace setting"
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
    nameForm.className = "nameForm"
    modalBox.appendChild(nameForm)

    let inputName = document.createElement("input")
    inputName.className = "input"
    nameForm.appendChild(inputName)

    let sendButton = document.createElement("button")
    sendButton.className ="send"
    sendButton.innerText = "->"
    nameForm.appendChild(sendButton)
}