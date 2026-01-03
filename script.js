const apiKey="Enter_Your_API_Key";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let btn=document.querySelector(".search button");
let ipt=document.querySelector(".search input");

let weatherIcon=document.querySelector(".weathericon");

let weather=document.querySelector(".weather")
let error= document.querySelector(".error")





async function checkweather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);


  if(response.status==404){

   error.style.display="block";
   weather.style.display="none";

  }
  else{
     let data= await response.json();

    const Ecity=document.querySelector(".city");
    Ecity.innerHTML=data.name;

    const feels=document.querySelector(".feel")
    feels.innerHTML="Feels Like  "+ Math.round(data.main.feels_like) +"°C";

    const temp=document.querySelector(".temp");
    temp.innerHTML=Math.round(data.main.temp) + "°C";

    const wind=document.querySelector(".wind");
    wind.innerHTML=data.wind.speed + "km/h";

    const humidity=document.querySelector(".humidity");
    humidity.innerHTML=data.main.humidity + "%";

    const visi=document.querySelector("#vis")
    visi.innerHTML=(data.visibility/1000).toFixed(1)+"km";

    let condition=data.weather[0].main;
      if(condition=== "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
         else if(condition===  "Clear"){
            weatherIcon.src="images/clear.png";
        }

        else if(condition=== "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(condition===  "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(condition ===  "Snow"){
            weatherIcon.src="images/snow.png";
        }

          else if(condition === "Mist"){
            weatherIcon.src="images/mist.png";
        }  
      
weather.style.display="block";
error.style.display="none";

}
}

btn.addEventListener("click",()=>{
    checkweather(ipt.value);
});


ipt.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        checkweather(ipt.value);
    }
});


  

   