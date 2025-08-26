from flask import request, jsonify
from config import app
from huggingface_hub import InferenceClient

# HUGGINGFACE_API_KEY = "your_huggingface_api_key"
MODEL = "deepseek-ai/DeepSeek-V3-0324"

client = InferenceClient(api_key=HUGGINGFACE_API_KEY)

@app.route("/get_code_name", methods=["GET"])
def get_code_name():
    word_1 = request.json.get("word1")
    word_2 = request.json.get("word2")
    word_3 = request.json.get("word3")

    if not word_1:
        return jsonify({"message":"You mest at least complete the word_1 field."}), 400

    completion = client.chat.completions.create(
        model = MODEL,
        messages = [
            {
                "role": "user",
                "content": f"Generate a single word that is related to the following words: {word_1}, {word_2}, {word_3}. Give me only the word."
            }
        ],
    )
    code_name = completion.choices[0].message['content']
    return jsonify({"codeName":code_name}), 200

if __name__ == "__main__":
    app.run(debug=True)
