scoreboard = () => {
    const scoreboard = document.getElementById("scoreboard");

    let score = `
    <tr>
        <td>${playerCards.textContent}</td>
        <td>${dealerCards.textContent}</td>
        <td>${winnerArea.innerHTML}</td>  
    </tr>`;

    scoreboard.innerHTML += score
    localStorage.Scoreboard += score;
}


