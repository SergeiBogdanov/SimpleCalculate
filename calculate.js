function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    let result;
    if (expression.includes('%')) {
        // Разделяем выражение на число и процентное значение
        const [numStr, percentStr] = expression.split('%');
        const num = parseFloat(numStr);
        const percent = parseFloat(percentStr) / 100;
        // Вычисляем процент от числа
        result = num * percent;
    } else {
        // Используем eval для вычисления обычного выражения
        result = eval(expression);
    }
    document.getElementById("display").value = result;
}

function removeLastCharacter() {
    const display = document.getElementById("display"); // Получаем доступ к полю отображения
    const currentValue = display.value; // Получаем текущее значение из поля отображения
    display.value = currentValue.slice(0, -1); // Удаляем последний символ и устанавливаем обновленное значение
}
