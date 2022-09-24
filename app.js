//*=========================================================
//*                     FLAG-APP
//*=========================================================
const url = "https://restcountries.com/v3.1/name/{name}";

const fetchCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url).then((res) => {
    renderError(`Something went wrong: ${res.status}`);
    throw new Error();
  });
};

const renderError = () => {
  const countryDiv = document.querySelector(".countries");
  countryDiv.innerHTML += `
    <h2>Countries can not fetched</h2>
    <img src="./img/404.png" alt=''/>`;
};

fetchCountryByName("turkey");
fetchCountryByName("usa");
