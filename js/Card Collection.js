let unshuffledDeck = [
    { value: 1, type: "Spades", card: '🂡' }, { value: 2, type: "Spades", card: '🂢' }, { value: 3, type: "Spades", card: '🂣' }, { value: 4, type: "Spades", card: '🂤' }, { value: 5, type: "Spades", card: '🂥' }, { value: 6, type: "Spades", card: '🂦' }, { value: 7, type: "Spades", card: '🂧' }, { value: 8, type: "Spades", card: '🂨' }, { value: 9, type: "Spades", card: '🂩' }, { value: 10, type: "Spades", card: '🂪' }, { value: 10, type: "Spades", card: '🂫' }, { value: 10, type: "Spades", card: '🂭' }, { value: 10, type: "Spades", card: '🂮' },
    { value: 1, type: "Hearts", card: '🂱' }, { value: 2, type: "Hearts", card: '🂲' }, { value: 3, type: "Hearts", card: '🂳' }, { value: 4, type: "Hearts", card: '🂴' }, { value: 5, type: "Hearts", card: '🂵' }, { value: 6, type: "Hearts", card: '🂶' }, { value: 7, type: "Hearts", card: '🂷' }, { value: 8, type: "Hearts", card: '🂸' }, { value: 9, type: "Hearts", card: '🂹' }, { value: 10, type: "Hearts", card: '🂺' }, { value: 10, type: "Hearts", card: '🂻' }, { value: 10, type: "Hearts", card: '🂽' }, { value: 10, type: "Hearts", card: '🂾' },
    { value: 1, type: "Diamonds", card: '🃁' }, { value: 2, type: "Diamonds", card: '🃂' }, { value: 3, type: "Diamonds", card: '🃃' }, { value: 4, type: "Diamonds", card: '🃄' }, { value: 5, type: "Diamonds", card: '🃅' }, { value: 6, type: "Diamonds", card: '🃆' }, { value: 7, type: "Diamonds", card: '🃇' }, { value: 8, type: "Diamonds", card: '🃈' }, { value: 9, type: "Diamonds", card: '🃉' }, { value: 10, type: "Diamonds", card: '🃊' }, { value: 10, type: "Diamonds", card: '🃋' }, { value: 10, type: "Diamonds", card: '🃍' }, { value: 10, type: "Diamonds", card: '🃎' },
    { value: 1, type: "Clubs", card: '🃑' }, { value: 2, type: "Clubs", card: '🃒' }, { value: 3, type: "Clubs", card: '🃓' }, { value: 4, type: "Clubs", card: '🃔' }, { value: 5, type: "Clubs", card: '🃕' }, { value: 6, type: "Clubs", card: '🃖' }, { value: 7, type: "Clubs", card: '🃗' }, { value: 8, type: "Clubs", card: '🃘' }, { value: 9, type: "Clubs", card: '🃙' }, { value: 10, type: "Clubs", card: '🃚' }, { value: 10, type: "Clubs", card: '🃛' }, { value: 10, type: "Clubs", card: '🃝' }, { value: 10, type: "Clubs", card: '🃞' }
];

let deck = [];
let playerHand = [];
let dealerHand = [];

shuffleDeck = () => {
    let tmpDeck = unshuffledDeck.slice();
    while (tmpDeck.length > 0) {
        let randomIdx = Math.trunc(Math.random() * tmpDeck.length);
        let card = tmpDeck.splice(randomIdx, 1);
        deck.push(...card);
    }
}

dealCard = () => {
    shuffleDeck();
    let card = deck.splice(0, 1);
    return card;
}

showCards = (cardHand) => {
    let card = [];
    for (let i = 0; i < cardHand.length; i++)
        card += `${cardHand[i].card}`;
    return card;
}

showDealerCard = (cardHand) => {
    CardBackside = {value:0, type: 'Backside', card: '🂠'}
    let card = [];
    for (let i = 0; i < 1; i++)
        card += `${cardHand[i].card}${CardBackside.card}`;
    return card;
}



