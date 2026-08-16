export function about(){
    const contentDiv = document.querySelector('div#content');

    // create 'About Us' header
    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = "About Us"
    // add 'about-us' class to it
    aboutHeader.classList.add('about-us');
    
    // create description div
    const description = document.createElement('div');
    description.textContent = "A burger joint which opened on June 28th, 1974. Created by Felix Kranken and Jack Walten.";
    // add 'about-description' class to it
    description.classList.add('about-description');

    // create contacts div for contacts section
    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container');
    // create two contacts
    
    // create contactItem div to contain contact related elements
    let contactItem = document.createElement('div');
    // contact person 1
    // contact person name header
    let contactName = document.createElement('h3');
    contactName.textContent = "Susan Woodings";
    // phone number div
    let phoneNumber = document.createElement('div');
    phoneNumber.textContent = "+1 212 203 8594"
    // add 'contact-item' class to contactItem
    contactItem.classList.add('contact-item');
    // append to contactItem
    contactItem.appendChild(contactName);
    contactItem.appendChild(phoneNumber);

    // append contactItem to contactContainer
    contactsContainer.appendChild(contactItem);



    // create contactItem div to contain contact related elements
    contactItem = document.createElement('div');
    // contact person 2
    // contact person name header
    contactName = document.createElement('h3');
    contactName.textContent = "Charles Brook";
    // phone number div
    phoneNumber = document.createElement('div');
    phoneNumber.textContent = "+1 212 356 2853"
    // add 'contact-item' class to contactItem
    contactItem.classList.add('contact-item');
    // append to contactItem
    contactItem.appendChild(contactName);
    contactItem.appendChild(phoneNumber);

    // append contactItem to contactContainer
    contactsContainer.appendChild(contactItem);



    contentDiv.appendChild(aboutHeader);
    contentDiv.appendChild(description);
    contentDiv.appendChild(contactsContainer);
}