let weatherForm = document.querySelector(".form");
let input = document.querySelector(".input")
let card = document.querySelector(".card");
let apiKey = "99192967526ae3c6048ea8b50ba57ab6";



weatherForm.addEventListener("submit", async event => {

    event.preventDefault()

    let city = input.value;

    if(city) {


        try {
            
            let weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)

        } catch (error) {
            console.error(error);
            displayError(`cant fetch data of ${ city }`)
            
        }

    } else {

        displayError(`please input a city name`)
    }

   

})


async function getWeatherData(city) {
 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` 
    
    let response = await fetch(apiUrl)

    console.log(response);

    if(!response.ok) {

        throw new Error("data not found");
        
    }

    return response.json()
    

}


function displayWeatherInfo(data) {

    let {name: city, 
        main: {humidity,temp},
        weather : [{id, description,icon}] } = data

    
        card.style.display = "block";
        card.textContent = " ";


    let nameDisplay = document.createElement("h2");
    nameDisplay.textContent = city;
    nameDisplay.classList.add("city-name");

card.appendChild(nameDisplay);

    let tempDisplay = document.createElement("p");
    tempDisplay.textContent = temp;
    tempDisplay.classList.add("temperature");

card.appendChild(tempDisplay);


    let descDisplay = document.createElement("p");
    descDisplay.textContent = description;
    descDisplay.classList.add("description");

card.appendChild(descDisplay);


    let humDisplay = document.createElement("p");
    humDisplay.textContent =`humidity: ${ humidity }` ;
    humDisplay.classList.add("humidity");

card.appendChild(humDisplay);


    let emojiDisplay = document.createElement("h1");
    emojiDisplay.textContent = displayEmoji(id);


card.appendChild(emojiDisplay);



}


function displayEmoji(weatherId) {

    if(weatherId >= 200 && weatherId <= 300) {

        return "⛈"

    } else if(weatherId >= 300 && weatherId <= 400) {

        return "🌨"

    } else if(weatherId >= 400 && weatherId <= 500){

        return "🌧"

    } else if(weatherId >= 500 && weatherId <= 600) {

        return "🌧"
    } else if(weatherId >= 600 && weatherId <= 700) {

        return "❄"
    } else if( weatherId >= 700 && weatherId <= 800) {

        return "🌥"
    }else if( weatherId == 800) {

        return "☁"


    } else if(weatherId > 800 && weatherId <= 900) {

        return "🌤"
    }

        

}


function displayError(message) {

    let errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add("error-message")

    card.textContent = " ";
    card.style.display = "block";
    card.append(errorMessage)



}