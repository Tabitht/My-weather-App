function citydata(response){
    let temp = document.querySelector("#temperature");
    let tempdata = response.data.temperature.current;
    let city = document.querySelector("#old-city");
    let descriptiondata = document.querySelector("#description");
    let humidity = document.querySelector("#humid");
    let wind = document.querySelector("#windspeed");
    let time = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    time.innerHTML = realdate(date);
    wind.innerHTML = response.data.wind.speed
    humidity.innerHTML = response.data.temperature.humidity
    descriptiondata.innerHTML = response.data.condition.description;
    city.innerHTML = response.data.city;
    temp.innerHTML = Math.round(tempdata);
}

function realdate(now){
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fdate = now.getDay();
    let intime = now.getHours();
    let inmin = now.getMinutes();
    if (intime < 10){
        intime = `0${intime}`;
    }
    if (inmin < 10){
        inmin = `0${inmin}`;
    }
    let indate = week[fdate]; 
    return `${indate} ${intime}:${inmin}`;
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