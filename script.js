console.log('working test')

const apiKey = '9bd11661b685830edd9f9e956ec5786a';
let city = 'Zurich';
let cityData = ''
async function weather (){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`, {
        mode: 'cors'
        })
        cityData = await response.json() 
        return cityData
        
    } catch (err) {
        console.log('error on coordinate api call')
        return
    }
}


let button = document.querySelector('input')
button.addEventListener('keydown', () => {
    if(event.key ==='Enter'){
        city = document.querySelector('#input').value
    console.log(city)
    populateDom()
    }
    
})

async function populateDom(){
    cityData = await weather()
    if(cityData.cod > 299){
        document.querySelector('#title').textContent = 'City not found!'
        return
    }
    console.log(cityData)
    document.querySelector('#title').textContent = `${cityData.name}, ${cityData.sys.country}`;
    document.querySelector('.weather').textContent = `${cityData.weather[0].main}`;
    document.querySelector('.temperature>h2').textContent = `${cityData.main.temp.toFixed(1)}°C`
    document.querySelector('.temperature>h4').textContent = `${cityData.main.temp_min.toFixed(1)}°C - ${cityData.main.temp_max.toFixed(1)}°C`
    document.querySelector('.description').textContent = `${cityData.weather[0].description[0].toUpperCase()}${cityData.weather[0].description.slice(1)}`
    document.querySelector('.humidity').textContent = `Humidity ${cityData.main.humidity}%`
    document.querySelector('.wind').textContent = `Wind ${cityData.wind.speed.toFixed(1)} Km/h`
    document.querySelector('.visibility').textContent = `Visibility ${(cityData.visibility/1000).toFixed(1)} Km`
}
populateDom()