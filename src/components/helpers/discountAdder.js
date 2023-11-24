export default function addDiscount(element, newPrice) {

    // Adds the passed discount to the passed element
    const priceEl = element.querySelector('.item-price');

    const oldPriceEl = document.createElement('span');
    oldPriceEl.textContent = priceEl.textContent;

    const newPriceEl = document.createElement('span');
    newPriceEl.textContent = `\$${newPrice}`;

    priceEl.textContent = '';
    priceEl.appendChild(oldPriceEl);
    priceEl.appendChild(newPriceEl);

}