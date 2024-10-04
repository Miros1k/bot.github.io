document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем светлую тему
    document.body.style.backgroundColor = '#ffffff'; // Белый фон
    document.body.style.color = '#000000'; // Черный текст

    // Добавите дополнительные стили для кнопок, если это необходимо
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#f0f0f0'; // Светлый фон
        button.style.color = '#000000'; // Темный текст
        button.style.border = '1px solid #ccc'; // Светлая рамка
    });

    // Аналогично для ссылок
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = '#007bff'; // Цвет ссылок
    });
});
