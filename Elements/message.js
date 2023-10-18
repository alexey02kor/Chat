export function createTemplateMessage(){
    let template = document.createElement("template")
    template.id = "messageTemplate"
    let textDiv = document.createElement("div")
    textDiv.className = "message companion"
    template.content.append(textDiv)
    document.body.append(template)
}

export function addMessage(text){
    const templateRoot = document.createElement("div")
    templateRoot.className ="messageBlock"
    const messagesPlace = document.getElementById("messageSpace")
    const template = document.getElementById("messageTemplate")
    const templateContent = template.content.cloneNode(true)
    templateContent.children[0].innerText = text
    templateRoot.appendChild(templateContent)
    messagesPlace.appendChild(templateRoot)
}