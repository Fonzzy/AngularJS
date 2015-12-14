function $(selector) {
	return document.querySelectorAll(selector);
}

function on(eLementSelector, event, behaviour) {
	$(eLementSelector).addEventListener(event, behaviour);
}

function off(eLementSelector, event) {
	$(eLementSelector).removeEventListener(event);
}