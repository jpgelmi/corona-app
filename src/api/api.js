

const current_date = new Date()

let dd = current_date.getDate()
let mm = current_date.getMonth() + 1
let yyyy = current_date.getFullYear()

if(dd<10){
    dd = "0"+ dd
}

if(mm<10){
    mm = "0"+ mm
}

let last_date = new Date();
last_date.setDate(last_date.getDate() - 1);

let last_dd = last_date.getDate()
let last_mm = last_date.getMonth() + 1
let last_yyyy = last_date.getFullYear()

if(last_dd<10){
    last_dd = "0"+ last_dd
}

if(last_mm<10){
    last_mm = "0"+ last_mm
}

const formatted_date = yyyy + "-" + mm + "-" + dd
const formatted_last_date = last_yyyy + "-" + last_mm + "-" + last_dd
export default function getDataPais(pais){
    const URL_HOST = `https://api.covid19api.com/country/${pais}?from=${formatted_last_date}T00:00:00Z&to=${formatted_date}T00:00:00Z`

    return fetch(URL_HOST)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            return (result)
        })

} 