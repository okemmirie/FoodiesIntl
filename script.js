


function increaseFontSize() {
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    body.style.fontSize = (currentSize - 2) + 'px';
}
