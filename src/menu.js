
export function menu(){
    const contentDiv = document.querySelector('div#content');

    // create menu header
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    
    // create beverages section
    const beverageContainer = document.createElement('div');
    beverageContainer.classList.add('beverage-container')
    const beverageHeader = document.createElement('h2');
    beverageHeader.textContent = 'Beverages';
    beverageContainer.appendChild(beverageHeader);

    // beverage items contain:
    // individual container
    const beverageItem = document.createElement('div');
    beverageItem.classList.add('beverage-item')
    // header3 for name of beverage
    const beverageh3 = document.createElement('h3');
    beverageh3.textContent = 'Wonderland Smoothie';
    // div for brief description
    const beverageDesc = document.createElement('div');
    beverageDesc.textContent = 'Wonderful smoothie straight from Wonderland';
    // price
    const beveragePrice = document.createElement('div');
    beveragePrice.textContent = '$1.5';
    // img of the beverage (optional)
    // append all that to the individual container
    beverageItem.appendChild(beverageh3);
    beverageItem.appendChild(beverageDesc);
    beverageItem.appendChild(beveragePrice);

    
    // append beverages to beverageContainer
    beverageContainer.appendChild(beverageItem);

    
    // create main course section
    const maincourseContainer = document.createElement('div');
    maincourseContainer.classList.add('maincourse-container');
    const maincourseHeader = document.createElement('h2');
    maincourseHeader.textContent = 'Main Course';
    maincourseContainer.appendChild(maincourseHeader);

    // main course items contain same thing as beverages
    // individual container
    const maincItem = document.createElement('div');
    maincItem.classList.add('maincourse-item')
    // header3 for name of main course
    const mainch3 = document.createElement('h3');
    mainch3.textContent = "Bon's Burger";
    // div for brief description
    const maincDesc = document.createElement('div');
    maincDesc.textContent = "The famous burger made by Bon himself";
    // price
    const maincPrice = document.createElement('div');
    maincPrice.textContent = '$4';
    // img of the beverage (optional)
    // append all that to the individual container
    maincItem.appendChild(mainch3);
    maincItem.appendChild(maincDesc);
    maincItem.appendChild(maincPrice);
    
    // append main courses to maincourseContainer
    maincourseContainer.appendChild(maincItem)

    // append all elements to contentDiv
    contentDiv.appendChild(beverageContainer);
    contentDiv.appendChild(maincourseContainer);
}