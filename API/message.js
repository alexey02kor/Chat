export function loadAllMessage() {
    return fetch("https://edu.strada.one/api/messages/", {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    }).then(
        response => {
            if (response.ok) {
                return response.json()
            } else {
                return undefined
            }
        }
    ).then(
        array => array.messages
    )
}