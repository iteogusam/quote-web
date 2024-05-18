const body = document.querySelector("body");
const themeButton = document.querySelector(".theme");
const quote = document.querySelector(".quote");
const generate = document.querySelector(".generate");
let theme = "light";

function themeChange() {
  if (theme === "light") {
    body.setAttribute("class", "dark");
    theme = "dark";
  } else {
    body.setAttribute("class", "light");
    theme = "light";
  }
}

themeButton.addEventListener("click", themeChange);

async function generateQuote() {
  const url =
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c2300d7526mshff1bab3ddddf338p10e280jsn979534cae6b9",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    quote.textContent = JSON.parse(result)[0].text;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

setInterval(generateQuote, 10000);

generate.addEventListener("click", generateQuote);
