import React from "react"
import { useState } from "react"

const MainForm = ({}) => {

    const [word1, setWord1] = useState("")
    const [word2, setWord2] = useState("")
    const [word3, setWord3] = useState("")

    const [codeName, setCodeName] = useState("")

    const onSubmit = async (e) => {

        // Prevent automatic page refresh
        e.preventDefault()

        const words = {
            word1,
            word2,
            word3
        }
        const url = "http://127.0.0.1:5000/get_code_name"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(words)
        }

        // Actually send the request
        const response = await fetch(url, options)
        const data = await response.json()

        if (response.status !== 200) {
            alert(data.message)
        } else {
            setCodeName(data.codeName)
            console.log(codeName)
        }
    }

    return <>
        <div>
            <h1>Entrez vos mots :</h1>
            <form onSubmit={onSubmit}> 
                <p>Mot 1 : <input type="text" id="word1" value={word1} onChange={(e) => setWord1(e.target.value)}/></p>
                <p>Mot 2 : <input type="text" id="word2" value={word2} onChange={(e) => setWord2(e.target.value)}/></p>
                <p>Mot 3 : <input type="text" id="word3" value={word3} onChange={(e) => setWord3(e.target.value)}/></p>
                <button type="submit">Envoyer</button>
                {/* <h4 type="text" value={codeName}>codeName</h4> */}
            </form>
            
        </div>
        {/* <div>
            <label type="text" value={codeName}/>
        </div>
        <div>
            <p>Réponse : <input type="text" value={codeName} readOnly/></p>
        </div> */}
        { codeName !== "" && <div>
            <p>Réponse : <input type="text" value={codeName} readOnly/></p>
            <p value={codeName}></p>
        </div>
        }
    </>
}

export default MainForm