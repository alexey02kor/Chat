export function createTemplateMessage() {
    let template = document.createElement("template")
    template.id = "messageTemplate"
    let textDiv = document.createElement("div")
    textDiv.className = "message companion"
    template.content.append(textDiv)
    document.body.append(template)
}

export function addMessage(message) {
    const templateRoot = document.createElement("div")
    templateRoot.className = "messageBlock"
    const messagesPlace = document.getElementById("messageSpace")
    const template = document.getElementById("messageTemplate")
    templateRoot.id = message._id
    const templateContent = template.content.cloneNode(true)
    templateContent.children[0].innerText = message.text
    templateRoot.appendChild(templateContent)
    messagesPlace.appendChild(templateRoot)
    let height = document.getElementById(message._id).clientHeight
    messagesPlace.scrollBy({top: height, left: 0})
}