import toggle from './toggler';

export default function loadContactPage() {

    // Add the .selected class to the button being clicked.
    document.querySelector('.contact').classList.add('selected');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');

    // Remove the selected class from the other two buttons and disable user interaction
    // with said buttons.
    toggle(home);
    toggle(menu);

    // Get the main section and set it's opacity to 0, triggering the 0.25s transition between value 1 and 0;
    const main = document.querySelector('main');
    main.style.opacity = '0';

    // After 0.5s, when the main section is fully invisible, replace all it's current content with
    // the Contact page's content
    setTimeout(() => {

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

        // Disable the default behavior of the 'Send' button, which tries to submit the form.
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

    }, 500)

    // After 0.5s, when the main section contains the Home page's content,
    // make it visible again and re-allow user interaction with the other two 
    // navigation buttons
    setTimeout(() => {
        main.style.opacity = '1';
        main.style.transform = 'scale(1)';
        toggle(home);
        toggle(menu);
    }, 500)


}