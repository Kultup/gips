// Функція для збільшення або зменшення кількості товару
function changeQuantity(productId, change) {
    let inputElement = document.getElementById('quantity_' + productId);
    let currentValue = parseInt(inputElement.value);
    let newValue = currentValue + change;
    if (newValue < 0) {
        newValue = 0;
    }
    inputElement.value = newValue;
}
