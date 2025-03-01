function handlesearchsubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElememt=document.querySelector("#city");
    cityElememt.innerHTML=searchInput.value;
}



let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesearchsubmit); 