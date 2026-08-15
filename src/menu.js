
export function menu(){
    const contentDiv = document.createElement('div#content');

    // create menu header
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    
    // create beverages section
    const beverageContainer = document.createElement('div');
    const beverageHeader = document.createElement('h2');
    beverageHeader.textContent = 'Beverages';
    
    // append beverages to beverageContainer

    
    // create main course section
    const maincourseContainer = document.createElement('div');
    const maincourseHeader = document.createElement('h2');
    maincourseHeader.textContent = 'Main Course';

    // main course items contain:
    // individual container
    // header3 for name of main course
    // div for brief description
    // price
    // img of the main course (optional)
    // append all that to the individual container
    
    // append main courses to maincourseContainer

    // append all elements to contentDiv
}