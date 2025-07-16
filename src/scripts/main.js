var btn = document.querySelector('input[name="send_button"]');
var answer = document.getElementById('the_answer')

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "Envoyer") {
    btn.value = "Mots envoyés";
    btn.disabled = true;
    answer.textContent="THE ANSWER"

  }
}
