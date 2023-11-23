export default function toggle(element) {

    // Helper function that is used by all three modules (home.js, contact.js, and menu.js)
    // to prevent the user from interacting with the navigation buttons while the transition animation
    // between one navigation section to the other is being rendered.
    element.classList.remove('selected');

    if (element.style.pointerEvents == 'none' && element.style.touchAction == 'none') {
        element.style.pointerEvents = 'auto';
        element.style.touchAction = 'auto';
    } else {
        element.style.pointerEvents = 'none';
        element.style.touchAction = 'none';
    }

}