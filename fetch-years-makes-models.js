const axios = require('axios')
const fs = require('fs')

const valuationBaseURL = 'http://valuation.svc.marketapps.strathcom.com:4000/cbb'

async function fetchVehiclePermutations() {
  const years = (await axios.get(`${valuationBaseURL}/years`)).data
  years.sort((a, b) => b.localeCompare(a))

  return Promise.all(years.map(async (year) => {
    const makes = (await axios.get(`${valuationBaseURL}/makes?year=${year}`)).data
    makes.sort((a, b) => a.make_name.localeCompare(b.make_name))

    return Promise.all(makes.map(async (make) => {
      const models = (await axios.get(`${valuationBaseURL}/models?year=${year}&make=${make.make_name}`)).data
      models.sort((a, b) => a.model_name.localeCompare(b.model_name))

      return models.map(model => `${year} ${make.make_name} ${model.model_name}`)
    }))
      .then(values => [].concat(...values))
  }))
    .then(values => [].concat(...values))
}

fetchVehiclePermutations()
  .then((data) => {
    fs.writeFile('./src/assets/data/yearsMakesModels.json', JSON.stringify(data), (err) => {
      if (err) {
        console.trace('Failed to save', err)
      }
    })
  })
