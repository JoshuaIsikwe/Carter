import fetch from "node-fetch";


const apiKey = "6eb508bda626ff893db446eff50d0066";
const apiToken = "ae4a73cb0e40c46f6e642f5f7429394534b35e3b5a4c7c21438e5389eec20497";
const listId = "5a4b3c4cbe0188ca9c0b2059";

const customFieldMap = {
    firstName: "5ffc223c1b802319cb6192fb",
    surname: "5ffc224be427094809dd7b7c",
    email: "5ffc22574a33172aa21ccda1",
    phoneNumber: "5ffc22612d199f8b0e325ef4",
    movie: "5ffc672ef7f3ca718a1a9b93",
};


function createTrelloCard(params) {
    fetch(`https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}`, {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "name": `${params.firstName} ${params.surname}`,
            "idList": listId,
        })
    })
    .then(res => res.json()).then(jsonData => {
        const cardId = jsonData.id;
        console.log("created card:", cardId);
        const requests = Object.keys(params).map(key => {
            return fetch(`https://api.trello.com/1/cards/${cardId}/customField/${customFieldMap[key]}/item?key=${apiKey}&token=${apiToken}`, {
                "method": "PUT",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "value": {
                        "text": params[key]
                    }
                })
            })
        })
        Promise.all(requests).then(responses => {
            console.log(responses);
        });
        // indicate to user that submission was successful
    })
}

const params = {
    firstName: "Enyioma",
    surname: "Osondu",
    email: "test@user.com",
    phoneNumber: "08000000000",
    movie: "Iron Man"
};

createTrelloCard(params);
