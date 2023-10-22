export function getCode(email){
    let user = {
        email : email
    }
    fetch("https://edu.strada.one/api/user",{
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(user)
        }).then(
            response => {
                if(response.ok){
                    alert("Код отправлен на почту")
                } else {
                    alert("Ошибка. Код ошибки:"+response.status)
                }})
}
export function saveToken(token){
    Cookies.set("token", token)
}
