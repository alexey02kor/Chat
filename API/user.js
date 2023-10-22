export function changeName(name){
    fetch("https://edu.strada.one/api/user", {
        method: "PATCH",
        body: JSON.stringify({name:name}),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    }).then(
        response => {
            response.ok ? alert("Имя измененно") : alert("Ошибка")
        }
    )
}