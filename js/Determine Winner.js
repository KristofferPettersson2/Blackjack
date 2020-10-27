let dealerValue = null;
let playerValue = null;

calculateHandValue = (cards) => {
    let result = 0;

    let hasAce = cards.find(card => card.value === 1) !== undefined;

    cards.forEach(card => result += card.value);
    //Check Ace
    if (hasAce && result + 10 <= 21)
        result += 10;

    return result;
}

checkBlackJack = (person, cardValue) => person.length === 2 && cardValue === 21;

isBust = (cardValue) => cardValue > 21;

newGame = () => {
    show(newGameBtn);
    hide(newCardBtn);
    hide(stayBtn);
}

determineWinner = (dealerHand, playerHand) => {
    dealerValue = calculateHandValue(dealerHand);
    playerValue = calculateHandValue(playerHand);

    if (isBust(playerValue)) return winnerArea.innerHTML = `<p class="red">Dealer Won</p>`, newGame();
    else if (isBust(dealerValue)) return winnerArea.innerHTML = `<p class="green">Player Won</p>`, newGame();

    let dealerBj = checkBlackJack(dealerHand, dealerValue);
    let playerBj = checkBlackJack(playerHand, playerValue);
    if (dealerBj && playerBj == true) return winnerArea.innerHTML = `<p class="green">Player Won</p>`, newGame();
    if (dealerBj) return winnerArea.innerHTML = `<p class="red">Dealer Won</p>`, newGame();
    if (playerBj) return winnerArea.innerHTML = `<p class="green">Player Won</p>`, newGame();

    if (dealerHand.length === 5 && dealerValue <= 21) return winnerArea.innerHTML = `<p class="red">Dealer Won</p>`, newGame();
    else if (dealerValue === playerValue) return winnerArea.innerHTML = `<p class="yellow">Draw</p>`, newGame();
    else if (playerValue > dealerValue) return winnerArea.innerHTML = `<p class="green">Player Won</p>`, newGame();
    else if (dealerValue > playerValue) return winnerArea.innerHTML = `<p class="red">Dealer Won</p>`, newGame();
}