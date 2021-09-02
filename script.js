let wnextday = [];
// console.log(url);
async function weather(){
  const city = await document.querySelector(".city").value;
  const url = "https://goweather.herokuapp.com/weather/"+city;
  const data = await fetch(url);
  const finaldata = await data.json();
  console.log(finaldata)
  finaldata.forecast.forEach(function(nextday){
    nextdaydata(nextday);
  });
  if(wnextday.length>3){
    wnextday.splice(0,3);
    // console.log(wnextday);
  }
  console.log(wnextday.temperature);
}
function nextdaydata(nextday){
  wnextday.push(nextday);
}