//JS file containing all the functions for searching the cards via the drop down function and for saving card

//declaring variables for the dropdown menu, search button and for the save button on each card
var searchButton = document.getElementById("searchButton");
var myMenu = document.getElementById("myMenu");
var cookingCard = document.getElementById("cookingCard");
var cookingSaveBtn = document.getElementById("cooking-save");
var studyingCard = document.getElementById("studyingCard");
var studyingSaveBtn = document.getElementById("studying-save");
var firstAidCard= document.getElementById("first-aidCard");
var firstAidSaveBtn = document.getElementById("first-aid-save");

var cookingStorage = localStorage.getItem("cookingKey") || "";
var studyingStorage = localStorage.getItem("studyingKey") || "";
var firstAidStorage = localStorage.getItem("firstAidKey") || "";


//form handler function instructing the system to hide cards if the desired card is not selected and search for via the dropdown form
function formSubmitHandler(event) {
    event.preventDefault();

    let menu = myMenu.value
    console.log(menu)
    if (menu == "cooking") {
        cookingCard.classList.remove("hide");
        cookingCard.classList.add("show");
    } 
      else { (menu != "cooking") 
        cookingCard.classList.remove("show");
    } 
    
    if (menu == "studying") {
        studyingCard.classList.remove("hide");
        studyingCard.classList.add("show");
    } else { (menu != "studying") 
        studyingCard.classList.remove("show");
    }
    
    if (menu == "first-aid") {
        firstAidCard.classList.remove("hide");
        firstAidCard.classList.add("show");
    } else { (menu != "first-aid") 
        firstAidCard.classList.remove("show");
    }

}   

      
/*function confirming that the card that has been selected to be saved will be saved
by instructing the system to keep showing the card that is saved unless another card
is selected*/
function checkSavedCards(){
if(cookingStorage == "cooking"){
    cookingCard.classList.remove("hide");
    cookingCard.classList.add("show");
} else if (studyingStorage == "studying"){
    studyingCard.classList.remove("hide");
    studyingCard.classList.add("show");
} else if (firstAidStorage == "first-aid"){
    firstAidCard.classList.remove("hide");
    firstAidCard.classList.add("show");
}
}

checkSavedCards();

/*addEventListener atttribute which gives the save button on each card a key-value
pair allowing each card to be saved (saved card will continue to show on screen even
after the webpage is refreshed*/
searchButton.addEventListener("click", formSubmitHandler);

cookingSaveBtn.addEventListener("click", function(){
    console.log("cook clicked")
    localStorage.setItem("cookingKey", "cooking")
});

studyingSaveBtn.addEventListener("click", function(){
    console.log("study clicked")
    localStorage.setItem("studyingKey", "studying")
});

firstAidSaveBtn.addEventListener("click", function(){
    console.log("first-aid clicked")
    localStorage.setItem("firstAidKey", "first-aid")
});
