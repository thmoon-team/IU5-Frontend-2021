let town = document.getElementById('inp');
let but = document.getElementById('but');
let name_town = document.getElementById('name_town');
let wh_val = document.getElementById('wh_val');
let wh_ico = document.getElementById('weather_ico');
let mon_val = document.getElementById('mon_val');
let mid_val = document.getElementById('mid_val');
let weather;
let base = document.getElementById('base');
let er = document.getElementById('er');

date = new Date();
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
let todate = document.getElementById('day');
todate.innerHTML = d + '.' + m + '.' + y;

async function getweather() {
    let mega_super_pretty_res;
    mega_super_pretty_res = fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&lang=ru&appid=be08447a12674066b618ce41e65e5e6e')
        .then(data => data.json().then(res => {
            return res;
        }))
        .catch(console.error);
    return mega_super_pretty_res;
}
let weather_today = getweather();
weather_today.then(res => {
        console.log(res);
    })
    .catch(console.error);


but.addEventListener('click', () => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + town.value + '&units=metric&lang=ru&appid=be08447a12674066b618ce41e65e5e6e')
        .then(function weather(res) {
            if (res.status != 200) {
                er.style.display = 'block';
                base.style.display = 'none';
            } else {
                res.json().then(data => {
                        base.style.display = 'flex';
                        er.style.display = 'none';
                        name_town.innerHTML = data.name;
                        console.log(data);
                        if (data.main.temp > 0) data.main.temp = '+' + data.main.temp;
                        if (data.main.temp_max > 0) data.main.temp_max = '+' + data.main.temp_max;
                        if (data.main.temp_min > 0) data.main.temp_min = '+' + data.main.temp_min;
                        wh_val.innerHTML = data.main.temp;
                        wh_ico.src = './img/animated/' + data.weather[0].icon + '.svg';
                        mon_val.innerHTML = data.main.temp_max;
                        mid_val.innerHTML = data.main.temp_min;
                        console.log(wh_ico.src);
                    })
                    .catch(console.error);
            }

        })
        .catch(console.error);


});
navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
        base.style.display = 'flex';
        er.style.display = 'none';
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&units=metric&lang=ru&appid=be08447a12674066b618ce41e65e5e6e')
            .then(function weather(res) {
                res.json().then(data => {
                        name_town.innerHTML = data.name;
                        console.log(data);
                        if (data.main.temp > 0) data.main.temp = '+' + data.main.temp;
                        if (data.main.temp_max > 0) data.main.temp_max = '+' + data.main.temp_max;
                        if (data.main.temp_min > 0) data.main.temp_min = '+' + data.main.temp_min;
                        wh_val.innerHTML = data.main.temp;
                        wh_ico.src = './img/animated/' + data.weather[0].icon + '.svg';
                        mon_val.innerHTML = data.main.temp_max;
                        mid_val.innerHTML = data.main.temp_min;
                        console.log(wh_ico.src);
                    })
                    .catch(console.error);
            })
            .catch(console.error)
    })
    .catch(() => {
        er.style.display = 'block';
        base.style.display = 'none';
        console.error;
    })