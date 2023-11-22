export default function toggle(element) {

    element.classList.remove('selected');

    if (element.style.pointerEvents == 'none' && element.style.touchAction == 'none') {
        element.style.pointerEvents = 'auto';
        element.style.touchAction = 'auto';
    } else {
        element.style.pointerEvents = 'none';
        element.style.touchAction = 'none';
    }

}