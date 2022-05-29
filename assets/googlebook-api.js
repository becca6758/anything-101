//JS file containing all the API call function requests via googlebooks API

/*declaring variables for each book class on each card-
(var bookTopics = document.querySelector(".bookTopics"));*/
var cookingBook = document.querySelector(".cookingBook");
var studyBook = document.querySelector(".studyBook");
var firstAidBook = document.querySelector(".firstAidBook");

//googlebook api request call functions that will call the googlebooks pages via the api url link for each card
function getCookingBook() {
    
    var googleCookURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:9780525573739";
    fetch(googleCookURL)
        .then(function (response) {
            console.log(googleCookURL);
            return response.json();
        })
        .then(function(data) {
            console.log("google cook book");
            console.log(data);
            window.open(data.items[0].volumeInfo.canonicalVolumeLink, '_blank');
            
        });
}

function getStudyBook() {

    var googleStudyURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:9781402280801";
    fetch(googleStudyURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log("google study book");
            console.log(data);
            window.open(data.items[0].volumeInfo.canonicalVolumeLink, '_blank');

        });
}

function getFirstAidBook() {

    var googleFirstAidURL = "https://www.googleapis.com/books/v1/volumes?q=isbn:9781584804796";
    fetch(googleFirstAidURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log("google firstaid book");
            console.log(data);
            window.open(data.items[0].volumeInfo.canonicalVolumeLink, '_blank');


        });

}


//click functions for the book button on card calling the api request
cookingBook.addEventListener("click", function (event) {
    event.preventDefault();
    getCookingBook()
    console.log("Cooking");
})

studyBook.addEventListener("click", function (event) {
    event.preventDefault();
    getStudyBook()
    console.log("Studying");
})

firstAidBook.addEventListener("click", function (event) {
    event.preventDefault();
    getFirstAidBook()
    console.log("FirstAid");
})

