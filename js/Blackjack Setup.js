const dealerCards = document.getElementById("dealer-cards");
const playerCards = document.getElementById("player-cards");
const winnerArea = document.getElementById("winner-area");
const newGameBtn = document.getElementById("new-game-btn");
const newCardBtn = document.getElementById("new-card-btn");
const stayBtn = document.getElementById("stay-btn");
const clearScoreboardBtn = document.getElementById("clear-scoreboard");

if (localStorage.Scoreboard != null) {
    scoreboard.innerHTML = localStorage.Scoreboard;
}

output = (element, text) => element.innerText += text;
hide = (element) => element.style.cssText = 'display: none !important';
show = (element) => element.style.cssText = 'display: block !important';

hide(newCardBtn);
hide(stayBtn);

newGameBtn.onclick = (event) => {
    playerCards.innerText = "";
    dealerCards.innerText = "";
    winnerArea.innerText = "";
    playerHand = [];
    dealerHand = [];

    hide(newGameBtn);
    show(newCardBtn);
    show(stayBtn);

    playerHand.push(...dealCard());
    playerHand.push(...dealCard());
    dealerHand.push(...dealCard());
    dealerHand.push(...dealCard());
    output(dealerCards, showDealerCard(dealerHand));
    output(playerCards, showCards(playerHand));

    output(dealerCards, calculateHandValue(dealerHand));
    output(playerCards, calculateHandValue(playerHand));
}

newCardBtn.onclick = (event) => {
    playerCards.innerHTML = "";
    playerHand.push(...dealCard());
    output(playerCards, showCards(playerHand));
    output(playerCards, calculateHandValue(playerHand));

    if (calculateHandValue(playerHand) > 21) {
        dealerCards.innerText = "";
        determineWinner(dealerHand, playerHand);
        output(dealerCards, showCards(dealerHand));
        output(dealerCards, calculateHandValue(dealerHand));
        scoreboard();
    }
}

stayBtn.onclick = (event) => {
    stay();
    determineWinner(dealerHand, playerHand);
    scoreboard();
    show(newGameBtn);
    hide(newCardBtn);
    hide(stayBtn);
}

clearScoreboardBtn.onclick = (event) => {
    localStorage.Scoreboard = "";
    window.location.reload();
}
