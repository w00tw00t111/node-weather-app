const request = require('request')
const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/35d24b4a965511d782b15d435076de0d/' + lat +', ' + long

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' ' + 'It is currently ' + body.currently.temperature + ' degrees out.' + ' There is a ' + body.daily.data[0].precipProbability * 100 + '% chance of rain. Real feel temperature is: ' + body.currently.apparentTemperature + ' degrees')
        }
    })    
}

module.exports = forecast