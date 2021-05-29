const constants = require('../constants/Constants')
const fetch = require('node-fetch');
//const https = require('https');
function getVaccinationByDistrict (date, districtId, vaccineType='') {
    if(!districtId)
        return 
    const currentDate = new Date()
    const slotDate = date || `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
    fetch(`${constants.apiUrl.findByDistrict}?district_id=${districtId}&date=${slotDate}&vaccine=${vaccineType}`,{
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest"
          }
    }).then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(`${new Date()} ==> ${err}`)
    })
}

module.exports = {
    getVaccinationByDistrict
}