
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

// const submitBtn2 = document.getElementById('submitBtn2');
// const cityName2 = document.getElementById('cityName');

const city_name = document.getElementById('city_name');
const tempHere = document.getElementById('tempHere');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');
const datahide2 = document.querySelector('.more_card');


const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const sea_level = document.getElementById('sea_level');
const visibility = document.getElementById('visibility');
const temp_max = document.getElementById('temp_max');
const temp_min = document.getElementById('temp_min');
const wind_speed = document.getElementById('wind_speed');
const statuss = document.getElementById('statuss')


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const dateArea = document.getElementById('day');
const monthArea = document.getElementById('today_date')
dateArea.innerText = days[new Date().getDay()];
monthArea.innerText = `${new Date().getDate()} ${months[new Date().getMonth()]}`;


const getInfo = (event) => {
    event.preventDefault();





    let cityVal = cityName.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=60a5218f87291732076e024902f94c7c&units=metric`;
    if (cityVal === "") {
        city_name.innerText = 'Please write City name before Search';
        datahide.classList.add('data_hide');
         datahide2.classList.add('more_card_hide');
    }
    else {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const arrData = [data];
                console.log(arrData);

                if (arrData[0].code === '404') {
                    city_name.innerText = 'Please write correct City name';
                }
                else {
                    city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
                    tempHere.innerText = arrData[0].main.temp;
                    const tempMod = arrData[0].weather[0].main;

                    humidity.innerText = arrData[0].main.humidity;
                    temp_max.innerText = arrData[0].main.temp_max;
                    temp_min.innerText = arrData[0].main.temp_min;
                    pressure.innerText = arrData[0].main.pressure;
                    sea_level.innerText = arrData[0].main.sea_level;
                    statuss.innerText = arrData[0].weather[0].main;
                    visibility.innerText=arrData[0].visibility;
                     wind_speed.innerText=arrData[0].wind.speed;




                    console.log(tempMod);

                    if (tempMod === 'Clear') {
                        temp_status.innerHTML = "<i class='fa-solid fa-sun fa-spin '></i>";
                    }
                    else if (tempMod === 'Clouds') {
                        temp_status.innerHTML = "<i class=' fa-solid fa-clouds '></i> ";
                    }
                    else if (tempMod === 'Rain') {
                        temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain '></i> ";
                    }
                    datahide.classList.remove('data_hide');
                    datahide2.classList.remove('more_card_hide');

                }
            }).catch(error => {
                city_name.innerText = ` Please write correct City name or Network error`;
                datahide.classList.add('data_hide');
                datahide2.classList.add('more_card_hide');
            });


    }
}

submitBtn.addEventListener('click', getInfo);
// submitBtn2.addEventListener('click', getInfo);