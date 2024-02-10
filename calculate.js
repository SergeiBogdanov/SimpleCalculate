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

function square() {
    const display = document.getElementById("display"); // Получаем доступ к полю отображения
    const currentValue = display.value; // Получаем текущее значение из поля отображения
    const number = parseFloat(currentValue); // Преобразуем текущее значение в число
    const result = Math.pow(number, 2); // Возводим число в квадрат
    display.value = result; // Обновляем значение поля отображения с результатом возведения в квадрат
}

function squareRoot() {
    const display = document.getElementById("display"); // Получаем доступ к полю отображения
    const currentValue = display.value; // Получаем текущее значение из поля отображения
    const number = parseFloat(currentValue); // Преобразуем текущее значение в число
    const result = Math.sqrt(number); // Вычисляем квадратный корень из числа
    display.value = result; // Обновляем значение поля отображения с результатом вычисления квадратного корня
}
