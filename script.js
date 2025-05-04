// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = "The text has been updated dynamically!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggle-style-btn').addEventListener('click', () => {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.classList.toggle('highlight');
});

// Add an element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', () => {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new dynamically added paragraph.";
    container.appendChild(newElement);
});

// Remove an element when a button is clicked
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    } else {
        alert("No elements left to remove!");
    }
});