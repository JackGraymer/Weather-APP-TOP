console.log('working test')

const apiKey = '9bd11661b685830edd9f9e956ec5786a';
let city = 'Washington';
let cityData = ''
async function weather (){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`, {
        mode: 'cors'
        })
        cityInfo = await response.json()        
        return cityInfo
        
    } catch (err) {
        console.log('error on coordinate api call',err)
    }
}


let button = document.querySelector('#button')
button.addEventListener('click', () => {
    city = document.querySelector('#input').value
    console.log(city)
    populateDom()
})

async function populateDom(){
    cityData = await weather()
    console.log(cityData)
    
}
