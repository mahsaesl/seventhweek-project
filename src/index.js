function refreshWeather(response){

    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);
 let cityElememt = document.querySelector("#city");
 cityElememt.innerHTML=response.data.city;

}



function searchcity(city){
    let apiKey = "c2526553620odab6dft0efe428b8b025"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    console.log(apiUrl);
    axios.get(apiUrl).then(refreshWeather);


}




function handlesearchsubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
   

    searchcity(searchInput.value);
}



let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesearchsubmit); 

searchcity("tehran");