//JS file for all the functions related the API request call via Amazon Rainforest API

/* declaring all the variables for all the supply class attached to each card- 
(var supplyTopics = document.querySelector(".supplyTopics");)*/
var cookingSupply = document.querySelector(".cookingSupply");
var studySupply = document.querySelector(".studySupply");
var firstAidSupply =  document.querySelector(".firstAidSupply");

//amazon rainforest api call request functions for each card that will call the amazon pages via the Supply button
function getCookingSupply() {
    var amazonCookURL = "https://api.rainforestapi.com/request?api_key=730A588D56354C2DAA71D5B4103EA1F4&type=category&amazon_domain=amazon.com&category_id=289816";
    fetch(amazonCookURL)
        .then(function (response) {
            console.log(amazonCookURL);
            return response.json();
        })
        .then(function(data) {
            console.log("amazon cook supply");
            console.log(data);
           window.open(data.refinements.departments[0].link,'_blank');
        });
    }
function getStudySupply() {    
    
    var AmazonStudyURL = "https://api.rainforestapi.com/request?api_key=730A588D56354C2DAA71D5B4103EA1F4&type=category&amazon_domain=amazon.com&category_id=13896617011";
    fetch(AmazonStudyURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log("amazon study supply");
        console.log(data);
        window.open(data.refinements.departments[0].link,'_blank');
    });
}
   
function getFirstAidSupply() {
    
    var AmazonFirstAidURL = "https://api.rainforestapi.com/request?api_key=730A588D56354C2DAA71D5B4103EA1F4&type=category&category_id=3762591&amazon_domain=amazon.com";
    fetch(AmazonFirstAidURL)
        .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function(data) {
                console.log("amazon firstaid supply");
                console.log(data);
                window.open(data.refinements.departments[7].link,'_blank');
            });
}     


//click functions for the book button on card calling the api request

cookingSupply.addEventListener("click", function(event) {
    event.preventDefault();
    getCookingSupply()
    console.log("ACooking");
})

studySupply.addEventListener("click", function (event) {
    event.preventDefault();
    getStudySupply()
    console.log("AStudying");
})

firstAidSupply.addEventListener("click", function (event) {
    event.preventDefault();
    getFirstAidSupply()
    console.log("AFirstAid");
})
