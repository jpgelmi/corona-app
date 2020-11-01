
const URL_HOST = "https://api.covid19tracking.narrativa.com/api/2020-09-22/country/chile" 


export function fetchApi() {
    fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            return result
        })
}