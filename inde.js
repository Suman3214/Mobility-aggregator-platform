document.getElementById('transport-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collecting the values from the form fields
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const availability = document.getElementById('availability').value;

    if (description === '' || price === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Creating a new transport item
    const transportItem = {
        type: type,
        description: description,
        price: price,
        availability: availability,
    };

    // Add the transport item to the display list
    displayTransport(transportItem);
    
    // Clear the form
    document.getElementById('transport-form').reset();
});

// Function to display the transport items
function displayTransport(item) {
    const transportList = document.getElementById('transport-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Type:</strong> ${item.type} <br>
        <strong>Description:</strong> ${item.description} <br>
        <strong>Price:</strong> $${item.price} <br>
        <strong>Availability:</strong> ${item.availability}
    `;

    transportList.appendChild(li);
}