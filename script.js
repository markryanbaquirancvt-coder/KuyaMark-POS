let currentTotal = 0;
const orderListContainer = document.getElementById('order-list');
const totalDisplay = document.getElementById('total-amount');

function addToOrder(itemName, price, inputId) {
    const qty = parseInt(document.getElementById(inputId).value);
    if (qty <= 0) return;

    const itemTotal = price * qty;
    currentTotal += itemTotal;

    // Create the order item UI
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item d-flex justify-content-between align-items-center animate-fade-in';
    orderItem.innerHTML = `
        <span class="fs-5">${itemName}</span>
        <span class="text-success fw-bold">Qty: ${qty}</span>
    `;

    orderListContainer.appendChild(orderItem);
    totalDisplay.innerText = currentTotal;
}

function processPayment() {
    const cash = parseFloat(document.getElementById('cash-input').value);
    
    if (isNaN(cash) || cash < currentTotal) {
        alert("Not enough balance. Please try again");
    } else {
        const change = cash - currentTotal;
        alert(`Thanks for ordering! Here's your ${change} pesos change`);
        resetOrder();
    }
}

function resetOrder() {
    currentTotal = 0;
    totalDisplay.innerText = "0";
    orderListContainer.innerHTML = "";
    document.getElementById('cash-input').value = "";
}