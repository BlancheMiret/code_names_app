import React from "react"

const MainForm = ({}) => {
    return <>
        <div class="align_center">
        <h1>Entrez vos mots :</h1>
        <form>
          <p>Mot 1 : <input type="text"/></p>
          <p>Mot 2 : <input type="text"/></p>
          <p>Mot 3 : <input type="text"/></p>
        </form>
        <input type="button" value="Envoyer" name="send_button"/>
      </div>
      <div>
        <h4 id="the_answer"></h4>
      </div> 
      </>
}

export default MainForm