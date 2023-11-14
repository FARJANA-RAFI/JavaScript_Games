const cardArray = [
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'burger',
        img:  'images/burger.jpeg'
    },
    {
        name: 'chips',
        img:  'images/chips.jpeg'
    },
    {
        name: 'noodles',
        img:  'images/noodles.jpeg'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    },
    {
        name: 'salad',
        img:  'images/salad.jpeg'
    },
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'burger',
        img:  'images/burger.jpeg'
    },
    {
        name: 'chips',
        img:  'images/chips.jpeg'
    },
    {
        name: 'noodles',
        img:  'images/noodles.jpeg'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    },
    {
        name: 'salad',
        img:  'images/salad.jpeg'
    }
    
]
// sorting method is used to sort card which is basically the images randomly comparing two elements from the array at a time.
cardArray.sort(() => 0.5 - Math.random())

// declaring the elements.
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// creating spaces for all 12 images.
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.jpeg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard();

// to check if image match
function checkMatch(){
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        console.log(cards);
        console.log("check for a match");

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute("src", "images/blank.jpeg");
            cards[optionTwoId].setAttribute("src", "images/blank.jpeg");
            alert("you have clicked the same image")
        }

        if(cardsChosen[0] == cardsChosen[1]){
            alert("you found a match");
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards [optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute("src", "images/blank.jpeg");
            cards[optionTwoId].setAttribute("src", "images/blank.jpeg");
            alert("sorry! try again")
        }

        resultDisplay.textContent = cardsWon.length;

        cardsChosen = [];
        cardsChosenIds = [];

        if(cardsWon.length == cardArray.length/2){
                resultDisplay.innerHTML = "Congratulations! you found them all.";
        }
}

// 'this' key word allowing to interact with whichever element we clicked.
// push method is used to insert items into the array.
// call a function after a certain amount of time interval. 
function flipCard(){
    const cardId = this.getAttribute("data-id");
    console.log(cardArray[cardId]. name);
    cardsChosenIds.push(cardId);
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute("src", cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}