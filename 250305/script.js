const quotesURL = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const random = Math.floor(Math.random() * 30); //0~29 랜덤 정수값
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.quotes[random].author}`;
  })
  .catch(console.log);
