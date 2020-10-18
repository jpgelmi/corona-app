
const URL_HOST = "https://api.covid19tracking.narrativa.com/api" 

export function getCasosHoy(){
    const url = `${URL_HOST}/2020-09-22/country/chile`
    
    return fetch(url).then((response) =>{
        return response.json()
    })
    .then((result) => {
        return result
    })
}