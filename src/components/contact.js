export default function loadContactPage() {

    document.querySelector('.home').classList.remove('selected');
    document.querySelector('.contact').classList.add('selected');
    document.querySelector('.menu').classList.remove('selected');

    const main = document.querySelector('main');
    main.innerHTML = '';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const details = document.createElement('div');
    details.classList.add('details');

    const phone = document.createElement('div');
    phone.classList.add('phone-number');

    const phoneTitle = document.createElement('h2');
    phoneTitle.textContent = 'Phone number';

    const phoneNumber = document.createElement('a');
    phoneNumber.setAttribute('href', 'tel:5555555555');
    phoneNumber.textContent = '(555) 555-5555';

    phone.appendChild(phoneTitle);
    phone.appendChild(phoneNumber);

    const email = document.createElement('div');
    email.classList.add('email');

    const emailTitle = document.createElement('h2');
    emailTitle.textContent = 'Email address';

    const emailAddress = document.createElement('a');
    emailAddress.setAttribute('href', 'malito:saladpackwebsite@gmail.com');
    emailAddress.textContent = 'saladpackwebsite@gmail.com';

    email.appendChild(emailTitle)
    email.appendChild(emailAddress);

    const address = document.createElement('div');
    address.classList.add('address');

    const addressTitle = document.createElement('h2');
    addressTitle.textContent = 'Location';

    const addressValue = document.createElement('p');
    addressValue.textContent = '4811 Belair Rd, Baltimore, Maryland';

    address.appendChild(addressTitle);
    address.appendChild(addressValue);

    const schedule = document.createElement('div');
    schedule.classList.add('opening-hours');

    const scheduleTitle = document.createElement('h2');
    scheduleTitle.textContent = 'Opening hours';

    const scheduleHours = document.createElement('p');
    scheduleHours.textContent = '10AM - 8PM';

    schedule.appendChild(scheduleTitle);
    schedule.appendChild(scheduleHours);

    details.appendChild(phone);
    details.appendChild(email);
    details.appendChild(address);
    details.appendChild(schedule);

    const contact = document.createElement('div');
    contact.classList.add('contact-us');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Send us a message';

    const form = document.createElement('form');

    const legend = document.createElement('legend');
    legend.textContent = 'Message form';

    const fieldset = document.createElement('fieldset');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email address';

    const input = document.createElement('input');
    input.id = 'email';
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'email');
    input.setAttribute('placeholder', 'Email address');

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');

    const textArea = document.createElement('textarea');
    textArea.id = 'message';
    textArea.setAttribute('name', 'message');
    textArea.setAttribute('cols', '35');
    textArea.setAttribute('rows', '10');
    textArea.setAttribute('placeholder', 'How can we help?');

    const button = document.createElement('button');
    button.textContent = 'Send';
    button.addEventListener('click', (e) => e.preventDefault());

    fieldset.appendChild(emailLabel);
    fieldset.appendChild(input);
    fieldset.appendChild(messageLabel);
    fieldset.appendChild(textArea);
    fieldset.appendChild(button);

    form.appendChild(legend);
    form.appendChild(fieldset);

    contact.appendChild(contactTitle);
    contact.appendChild(form);

    contactContainer.appendChild(details);
    contactContainer.appendChild(contact);

    main.appendChild(contactContainer);

}