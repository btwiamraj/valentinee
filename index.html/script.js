function handleYesClick() {
    alert("Yayyy 🥰💖 I knew it!\nYou just made my day ❤️");
}

function handleNoClick() {
    const noBtn = document.querySelector(".no-button");
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
