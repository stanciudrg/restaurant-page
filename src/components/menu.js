import toggle from './toggler';
import vegetarianPNG from '../img/vegetarian.png';
import avocadoPNG from '../img/avocado.png';
import caesarPNG from '../img/caesar.png';
import beefRicePNG from '../img/beef-rice.png';
import chickenPNG from '../img/chicken.png';
import tunaPNG from '../img/tuna.png';

export default function loadMenuPage() {

    document.querySelector('.menu').classList.add('selected');
    const home = document.querySelector('.home');
    const contact = document.querySelector('.contact');

    toggle(home);
    toggle(contact);

    const main = document.querySelector('main');
    main.style.opacity = '0';
    setTimeout(() => {
        main.innerHTML = '';

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        const ul = document.createElement('ul');
        ul.classList.add('menu-list');

        createItem(vegetarianPNG, 'vegetarian', '350', '6.99');
        createItem(avocadoPNG, 'avocado', '380', '9.99');
        createItem(caesarPNG, 'caesar', '480', '9.99');
        createItem(beefRicePNG, 'beef-rice', '650', '13.99');
        createItem(chickenPNG, 'chicken', '430', '7.99');
        createItem(tunaPNG, 'tuna', '400', '11.99');

        menuContainer.appendChild(ul);
        main.appendChild(menuContainer);

        function createItem(image, name, calories, price) {

            const li = document.createElement('li');
            li.classList.add(name);
            li.setAttribute('tabindex', '0');

            const png = new Image();
            png.src = image;
            png.setAttribute('height', '175');
            png.setAttribute('width', '175');

            const itemInfo = document.createElement('div');
            itemInfo.classList.add('item-info');

            const itemName = document.createElement('div');
            itemName.classList.add('item-name');
            itemName.textContent = name;

            const itemCalories = document.createElement('div');
            itemCalories.classList.add('item-calories');
            itemCalories.textContent = `${calories} calories`;

            const itemPrice = document.createElement('div');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = `\$${price}`;

            switch (name) {

                case 'vegetarian':

                    png.setAttribute('alt', 'Vegetarian Salad');
                    break;

                case 'avocado':

                    png.setAttribute('alt', 'Avocado Salad');
                    break;

                case 'caesar':

                    png.setAttribute('alt', 'Caesar Salad');
                    break;

                case 'beef-rice':

                    png.setAttribute('alt', 'Beef and Rice Salad');
                    break;

                case 'chicken':

                    png.setAttribute('alt', 'Chicken Salad');
                    itemPrice.textContent = '';

                    const oldPrice = document.createElement('span');
                    oldPrice.textContent = '$8.99';

                    const newPrice = document.createElement('span');
                    newPrice.textContent = `\$${price}`;
                    itemPrice.appendChild(oldPrice);
                    itemPrice.appendChild(newPrice);
                    break;

                case 'tuna':

                    png.setAttribute('alt', 'Tuna Salad');

            }

            itemInfo.appendChild(itemName);
            itemInfo.appendChild(itemCalories);
            itemInfo.appendChild(itemPrice);

            li.appendChild(png);
            li.appendChild(itemInfo);
            ul.appendChild(li);

        }

    }, 500)

    setTimeout(() => {
        main.style.opacity = '1';
        main.style.transform = 'scale(1)';
        toggle(home);
        toggle(contact);
    }, 500)

}