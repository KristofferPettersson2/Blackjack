stay = () => {
    dealerValue = calculateHandValue(dealerHand);
    playerValue = calculateHandValue(playerHand);
    //add dealer remaining cards
    while (dealerValue <= playerValue && playerValue <= 21 && dealerValue < 17) {
        dealerHand.push(...dealCard());
        dealerValue = calculateHandValue(dealerHand);
        playerValue = calculateHandValue(playerHand);
    }

    dealerCards.innerText = "";
    output(dealerCards, showCards(dealerHand));
    output(dealerCards, calculateHandValue(dealerHand));
    determineWinner(dealerHand, playerHand);
}

