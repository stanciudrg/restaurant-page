export default function createContactPage() {

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const details = document.createElement('div');
    details.classList.add('details');
    contactContainer.appendChild(details);

    const phone = document.createElement('div');
    phone.classList.add('phone-number');
    details.appendChild(phone);

    const phoneTitle = document.createElement('h2');
    phoneTitle.textContent = 'Phone number';
    phone.appendChild(phoneTitle);

    const phoneNumber = document.createElement('a');
    phoneNumber.setAttribute('href', 'tel:5555555555');
    phoneNumber.textContent = '(555) 555-5555';
    phone.appendChild(phoneNumber);

    const email = document.createElement('div');
    email.classList.add('email');
    details.appendChild(email);

    const emailTitle = document.createElement('h2');
    emailTitle.textContent = 'Email address';
    email.appendChild(emailTitle);

    const emailAddress = document.createElement('a');
    emailAddress.setAttribute('href', 'malito:saladpackwebsite@gmail.com');
    emailAddress.textContent = 'saladpackwebsite@gmail.com';
    email.appendChild(emailAddress);

    const address = document.createElement('div');
    address.classList.add('address');
    details.appendChild(address);

    const addressTitle = document.createElement('h2');
    addressTitle.textContent = 'Location';
    address.appendChild(addressTitle);

    const addressValue = document.createElement('p');
    addressValue.textContent = '4811 Belair Rd, Baltimore, Maryland';
    address.appendChild(addressValue);

    const schedule = document.createElement('div');
    schedule.classList.add('opening-hours');
    details.appendChild(schedule);

    const scheduleTitle = document.createElement('h2');
    scheduleTitle.textContent = 'Opening hours';
    schedule.appendChild(scheduleTitle);

    const scheduleHours = document.createElement('p');
    scheduleHours.textContent = '10AM - 8PM';
    schedule.appendChild(scheduleHours);

    const contact = document.createElement('div');
    contact.classList.add('contact-us');
    contactContainer.appendChild(contact);

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Send us a message';
    contact.appendChild(contactTitle);

    const form = document.createElement('form');
    contact.appendChild(form);

    const legend = document.createElement('legend');
    legend.textContent = 'Message form';
    form.appendChild(legend);

    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email address';
    fieldset.appendChild(emailLabel);

    const input = document.createElement('input');
    input.id = 'email';
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'email');
    input.setAttribute('placeholder', 'Email address');
    fieldset.appendChild(input);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    fieldset.appendChild(messageLabel);

    const textArea = document.createElement('textarea');
    textArea.id = 'message';
    textArea.setAttribute('name', 'message');
    textArea.setAttribute('cols', '38');
    textArea.setAttribute('rows', '10');
    textArea.setAttribute('placeholder', 'How can we help?');
    fieldset.appendChild(textArea);

    // Disable the default form submission behavior of the 'Send' button
    const button = document.createElement('button');
    button.textContent = 'Send';
    button.addEventListener('click', (e) => e.preventDefault());
    fieldset.appendChild(button);

    return contactContainer;

}