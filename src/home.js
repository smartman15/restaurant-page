import bonsBurgers from "./images/bons_burgers.jpg";

export function component(){
    const contentDiv = document.querySelector("div#content");

    // create bonBurgerLogo img variable
    const bonBurgerLogo = document.createElement('img');
    // set src to the bon burger logo
    bonBurgerLogo.src = bonsBurgers;
    // set width to 200
    bonBurgerLogo.width = 200;

    // create h1 variable
    const header = document.createElement('h1');
    // set text content to "Bon's Burgers"
    header.textContent = "Bon's Burgers";

    // create div variables for brief description of restaurant
    const div1 = document.createElement('div');
    div1.textContent = "Welcome to Bon's Burgers! A beautiful place full of joy and togetherness!";

    const div2 = document.createElement('div');
    div2.textContent = "We serve everyone here with respect and make our food with nothing but the freshest ingredients, and the most important ingredient of them all: love.";

    contentDiv.appendChild(bonBurgerLogo);
    contentDiv.appendChild(header);
    contentDiv.appendChild(div1);
    contentDiv.appendChild(div2);
}