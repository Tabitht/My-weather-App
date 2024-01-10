function citydata(response){
    let temp = document.querySelector("#temperature");
    let tempdata = response.data.temperature.current;
    let city = document.querySelector("#old-city");
    city.innerHTML = response.data.city;
    temp.innerHTML = Math.round(tempdata);
}

function searchcity(city){
    let apikey = "c1o355et4b9aed09b1a6435d6694e4ff";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(citydata);
}

function changecityname(event){
    event.preventDefault();
    let newcity = document.querySelector("#city-search");
    searchcity(newcity.value);
}
let applybutton = document.querySelector("#search-button");
applybutton.addEventListener("click", changecityname);