console.log('working test')

const apiKey = '9bd11661b685830edd9f9e956ec5786a';
const city = 'Washington';
let cityInfo = ''
async function weather (){
    try {
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=' + apiKey, {
        mode: 'cors'
        })
        let cityData = await response.json()
        let cityCoords = cityData.coord
        //console.log('coordinates are ', cityData.coord)
        try {
            let response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.lat}&lon=${cityCoords.lon}&appid=${apiKey}`, {
                mode: 'cors'
            })
            let cityData2 = await response2.json()
            /* console.log(cityData2)
            cityInfo =  await cityData2
            console.log(cityInfo) */
            return cityData2
        } catch (err) {
            console.log(err)
        }
       
    } catch (err) {
        console.log('error on coordinate api call',err)
    }
}

async function populateDom(){
    cityInfo = await weather()
    

}
populateDom()