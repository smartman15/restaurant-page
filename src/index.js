import "./styles.css";
import {home} from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";


console.log('hello world');

home();
// menu();
// about();

const contentDiv = document.querySelector("div#content");
// select home, menu, about buttons
const homeBtn = document.querySelector("button#home");
const menuBtn = document.querySelector("button#menu");
const aboutBtn = document.querySelector("button#about");
// on clicking home:
homeBtn.addEventListener("click", () => {
    // remove content div children
    contentDiv.textContent = "";
    // execute home()
    home();
})
    

// on clicking menu
menuBtn.addEventListener("click", () => {
    // remove content div children
    contentDiv.textContent = "";
    // execute menu()
    menu();
})
    

// on clicking about
aboutBtn.addEventListener("click", () => {
    // remove content div children
    contentDiv.textContent = "";
    // execute about()
    about();
})
    