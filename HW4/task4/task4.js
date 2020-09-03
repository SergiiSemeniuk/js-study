window.addEventListener('click', handler);
function handler(event) {
	const element = event.toElement;
    if(element.tagName !== 'TD') {
        return;
    }
    const color = element.style.background;
    document.body.style.backgroundColor = color;
}
