# Définir les endpoints

# Requête du front seront : "donne moi un mot, avec ces mots"
# Et dans le futur : en évitant ce mot, ces mots...

# GET ?
# - word 1 
# - word 2
# - word 3

# localhost:5000/endpoint_name

from flask import request, jsonify
from config import app
from huggingface_hub import InferenceClient

# HUGGINGFACE_API_KEY = "your_huggingface_api_key"
MODEL = "deepseek-ai/DeepSeek-V3-0324"

client = InferenceClient(api_key=HUGGINGFACE_API_KEY)

@app.route("/get_code_name", methods=["GET"])
def get_code_name():
    word_1 = "queen"
    word_2 = "salt"

    completion = client.chat.completions.create(
        model = MODEL,
        messages = [
            {
                "role": "user",
                "content": f"Generate a single word that is related to the following words: {word_1}, {word_2}. Give me only the word."
            }
        ],
    )
    code_name = completion.choices[0].message['content']
    return jsonify({"codeName":code_name})

if __name__ == "__main__":
    app.run(debug=True)
