 
const hamburger = document.getElementsByClassName('hamburger')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]
hamburger.addEventListener('click', () => {
  menubar.classList.toggle('active')
})

const search = () => {
  const searchBox =  document.getElementById("search").value.toUpperCase();

  const storeitems = document.getElementById("food-list")

  const foods = document.querySelectorAll(".card-shadow")

  const foodName = storeitems.getElementsByTagName("h3")

  let noResult = document.querySelector('p')

  let found = false;
  for(let i = 0; i < foodName.length; i++){
    let match = foods[i].getElementsByTagName('h3')[0];
    if(match){
      let textValue = match.textContent || match.innerHTML

      if(textValue.toUpperCase().indexOf(searchBox) >  -1){
        foods[i].style.display = "";
        found = true;
      }else{
        foods[i].style.display = "none";
      }
    }
  }
  if (found){
    noResult.style.display = "none";
  }
  else{
    noResult.style.display = '';
  }
}

function clearInput() {
let clearSearch = document.getElementById('search').value =""
}
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");

function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display ="block"
}
function get2ndRecipe(){
  document.querySelector(".second-meal-detail").style.display = "block"
}
function get3rdRecipe(){
  document.querySelector(".third-meal-detail").style.display = "block"
}
function get4thRecipe(){
  document.querySelector(".four-meal-detail").style.display = "block"
}
function get5thRecipe(){
  document.querySelector(".five-meal-detail").style.display = "block"
}
function get6thRecipe(){
  document.querySelector(".six-meal-detail").style.display = "block"
}
function get7thRecipe(){
  document.querySelector(".seven-meal-detail").style.display = "block"
}
function get8thRecipe(){
  document.querySelector(".eight-meal-detail").style.display = "block"
}
function get9thRecipe(){
  document.querySelector(".nine-meal-detail").style.display = "block"
}
function get10thRecipe(){
  document.querySelector(".ten-meal-detail").style.display = "block"
}
function get11thRecipe(){
  document.querySelector(".eleven-meal-detail").style.display = "block"
}

function closeBtn(){
  document.querySelector(".meal-detail").style.display = "none"
  document.querySelector(".second-meal-detail").style.display = "none"
  document.querySelector(".third-meal-detail").style.display ="none"
  document.querySelector(".four-meal-detail").style.display ="none"
  document.querySelector(".five-meal-detail").style.display ="none"
  document.querySelector(".six-meal-detail").style.display ="none"
  document.querySelector(".seven-meal-detail").style.display ="none"
  document.querySelector(".eight-meal-detail").style.display ="none"
  document.querySelector(".nine-meal-detail").style.display ="none"
  document.querySelector(".ten-meal-detail").style.display ="none"
  document.querySelector(".eleven-meal-detail").style.display ="none"
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const cardName = document.getElementById('card-name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  // Simple validation (you can add more robust validation here)
  if(cardName && cardNumber && expiryDate && cvv) {
      alert('Payment Submitted');
  } else {
      alert('Please fill in all fields');
  }
});



