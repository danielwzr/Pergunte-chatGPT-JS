const apiKey = "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";
const inputPergunta = document.getElementById("pergunta");
const imgLoading = document.getElementById("imgLoading");
const pResposta = document.getElementById("resposta");

async function enviarPergunta() {
  var pergunta = inputPergunta.value;
  pResposta.innerText = "";

  imgLoading.style.display = "block";

  await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: pergunta,
      max_tokens: 2048,
      temperature: 0.5,
    }),
  })
    .then((objResposta) => objResposta.json())
    .then((resposta) => {
      imgLoading.style.display = "none";
      pResposta.innerText = resposta.choices[0].text;
    });
}
