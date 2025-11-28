const tg = window.Telegram.WebApp;
tg.expand(); // раскрывает приложение на весь экран

document.getElementById("btn").onclick = () => {
    tg.MainButton.setText("Test Button");
    tg.MainButton.show();
};
