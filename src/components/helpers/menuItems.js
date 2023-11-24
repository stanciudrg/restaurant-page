import vegetarianPNG from '.././../img/vegetarian.png';
import avocadoPNG from '.././../img/avocado.png';
import caesarPNG from '.././../img/caesar.png';
import beefRicePNG from '.././../img/beef-rice.png';
import chickenPNG from '.././../img/chicken.png';
import tunaPNG from '.././../img/tuna.png';

export default function createMenuItems() {

    // Contains all the menu items. More items can be added at any time and the application
    // will pick them up and append them to the webpage
    const menuItems = {
        vegetarian: createItem(vegetarianPNG, 'vegetarian', 'Vegetarian', '350', '6.99'),
        avocado: createItem(avocadoPNG, 'avocado', 'Avocado', '380', '9.99'),
        caesar: createItem(caesarPNG, 'caesar', 'Caesar', '480', '9.99'),
        beefRice: createItem(beefRicePNG, 'beef-rice', 'Beef and Rice', '650', '13.99'),
        chicken: createItem(chickenPNG, 'chicken', 'Chicken', '430', '7.99'),
        tuna: createItem(tunaPNG, 'tuna', 'Tuna', '400', '11.99')
    }

    function createItem(image, className, displayName, calories, price) {

        // Creates a menu item from scratch
        const li = document.createElement('li');
        li.classList.add(className);
        li.setAttribute('tabindex', '0');

        // Menu item - visual representation
        const png = new Image();
        png.src = image;
        png.setAttribute('height', '175');
        png.setAttribute('width', '175');
        png.setAttribute('alt', `${displayName} Salad`);
        li.appendChild(png);

        // Menu item - information section
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        li.appendChild(itemInfo);

        // Menu item - name
        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = displayName;
        itemInfo.appendChild(itemName);

        // Menu item - calories
        const itemCalories = document.createElement('div');
        itemCalories.classList.add('item-calories');
        itemCalories.textContent = `${calories} calories`;
        itemInfo.appendChild(itemCalories);

        // Menu item - price
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `\$${price}`;
        itemInfo.appendChild(itemPrice);

        return li;

    }

    return menuItems;

}
