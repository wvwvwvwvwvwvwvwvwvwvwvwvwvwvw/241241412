const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive you want to say no?",
    "please...",
    "think about it",
    "If you say no again, I will be really sad...",
    ":c",
    "you are making me sad",
    "Ok fine",
    "say yes please ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}