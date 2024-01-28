
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{
 document.querySelector('#cityName').innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
   // cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    min_temp.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(event)=>{

  getWeather(city.value);
  event.preventDefault();
})
getWeather("Delhi")


const getweather2=(city2)=>{
  //document.querySelector('#cityName').innerHTML=city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    
     k1.innerHTML=response.cloud_pct
      k8.innerHTML=response.temp
      temp2.innerHTML=response.temp
      k2.innerHTML=response.feels_like
      k3.innerHTML=response.humidity
      humidity2.innerHTML=response.humidity
      k5.innerHTML=response.min_temp
      k4.innerHTML=response.max_temp
      k9.innerHTML=response.wind_speed
      wind_speed2.innerHTML=response.wind_speed
      k10.innerHTML=response.wind_degrees
      k6.innerHTML=response.sunrise
      k7.innerHTML=response.sunset
      
    })
    .catch((err) => console.error(err));
  }
  submit.addEventListener("click",(event)=>{
  
    getWeather2(city2.value);
    event.preventDefault();
})
getweather2("Kolkata");



const getweather3=(city3)=>{
  //document.querySelector('#cityName').innerHTML=city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city3, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    
      p1.innerHTML=response.cloud_pct
      p8.innerHTML=response.temp
      temp2.innerHTML=response.temp
      p2.innerHTML=response.feels_like
      p3.innerHTML=response.humidity
      humidity2.innerHTML=response.humidity
      p5.innerHTML=response.min_temp
      p4.innerHTML=response.max_temp
      p9.innerHTML=response.wind_speed
      wind_speed2.innerHTML=response.wind_speed
      p10.innerHTML=response.wind_degrees
      p6.innerHTML=response.sunrise
      p7.innerHTML=response.sunset
  
      
    })
    .catch((err) => console.error(err));
  }
  submit.addEventListener("click",(event)=>{
  
    getWeather3(city3.value);
    event.preventDefault();
})
getweather3("Pune");


const getweather4=(city4)=>{
  //document.querySelector('#cityName').innerHTML=city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city4, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    
      j1.innerHTML=response.cloud_pct
      j8.innerHTML=response.temp
      temp2.innerHTML=response.temp
      j2.innerHTML=response.feels_like
      j3.innerHTML=response.humidity
      humidity2.innerHTML=response.humidity
      j5.innerHTML=response.min_temp
      j4.innerHTML=response.max_temp
      j9.innerHTML=response.wind_speed
      wind_speed2.innerHTML=response.wind_speed
      j10.innerHTML=response.wind_degrees
      j6.innerHTML=response.sunrise
      j7.innerHTML=response.sunset
  
      
    })
    .catch((err) => console.error(err));
  }
  submit.addEventListener("click",(event)=>{
  
    getWeather4(city4.value);
    event.preventDefault();
})
getweather4("Jaipur");


const getweather5=(city5)=>{
  //document.querySelector('#cityName').innerHTML=city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city5, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    
      m1.innerHTML=response.cloud_pct
      m8.innerHTML=response.temp
      temp2.innerHTML=response.temp
      m2.innerHTML=response.feels_like
      m3.innerHTML=response.humidity
      humidity2.innerHTML=response.humidity
      m5.innerHTML=response.min_temp
      m4.innerHTML=response.max_temp
      m9.innerHTML=response.wind_speed
      wind_speed2.innerHTML=response.wind_speed
      m10.innerHTML=response.wind_degrees
      m6.innerHTML=response.sunrise
      m7.innerHTML=response.sunset
  
      
    })
    .catch((err) => console.error(err));
  }
  submit.addEventListener("click",(event)=>{
  
    getWeather5(city5.value);
    event.preventDefault();
})
getweather5("Mangalore");