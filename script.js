
async function weather(){
  const city = await document.querySelector(".city").value;
  const url = "https://goweather.herokuapp.com/weather/"+city;
  console.log(url);
  const data = await fetch(url);
  const finaldata = await data.json();
  console.log(finaldata)
  const city_name = document.querySelector(".city_name");
  city_name.innerText="Weather in "+city;
  const wind = document.querySelector(".wind");
  wind.innerText=finaldata.wind;
  const temp = document.querySelector(".temp");
  temp.innerText=finaldata.temperature;
  const desc = document.querySelector(".desc");
  desc.innerText=finaldata.description;  
}
