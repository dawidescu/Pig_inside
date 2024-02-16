
// Initialize total as 0 and create an empty array for the order
let total = 0;
let order = [];

// Get all the order buttons
let orderButtons = document.querySelectorAll('.item-order');

let myFubc = function() {
    // Get the price from the sibling element .item-price
    let priceElement = button.parentElement.querySelector('.item-price');
    let price = parseFloat(priceElement.textContent);

    // Add the price to the total and the order
    total += price;
    order.push(price);

    // Update the total in the HTML
    document.getElementById('total').textContent = total.toFixed(2) + ' zł.';
}

// Add click event listener to each order button
let button = document.querySelector(".item-order")
orderButtons.forEach(function(button) {
    button.addEventListener('click', myFubc);
});

// Get the cancel last item button
let cancelButton = document.querySelector('.cancel-last-item');

// Add click event listener to the cancel button
cancelButton.addEventListener('click', function() {
    // Check if the order is not empty
    if (order.length > 0) {
        // Remove the last item from the order and subtract its price from the total
        let lastPrice = order.pop();
        total -= lastPrice;

        // Update the total in the HTML
        document.getElementById('total').textContent = total.toFixed(2) + ' zł.';
    }
    });

    