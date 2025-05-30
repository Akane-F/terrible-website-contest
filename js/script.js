const grid = document.getElementById("grid");
const grid2 = document.getElementById("grid2");
const grid3 = document.getElementById("grid3");
const sizes = ["size-1x1", "size-2x2", "size-3x3", "size-4x4"];
const laughShakes = ["laughShake1", "laughShake2"];

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const laughShake = laughShakes[Math.floor(Math.random() * laughShakes.length)];
    tile.className = `tile ${size} ${laughShake}`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";
    tile.appendChild(img);

    grid.appendChild(tile);
}

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const laughShake = laughShakes[Math.floor(Math.random() * laughShakes.length)];
    tile.className = `tile ${size} ${laughShake}`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";
    tile.appendChild(img);

    grid2.appendChild(tile);
}

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const laughShake = laughShakes[Math.floor(Math.random() * laughShakes.length)];
    tile.className = `tile ${size} ${laughShake} laughImage`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";

    img.addEventListener('click', () => {
        const laughSoundSrc = "./videos/chipmunks-hehehei-113723.mp3";
        const laughSound = new Audio(laughSoundSrc);
        laughSound.loop = true;
        laughSound.play();
        img.classList.add('fade-out');
        setTimeout(() => {
            img.style.display = 'none';
        }, 500);

        setTimeout(() => {
            img.style.display = 'block';
            img.classList.remove('fade-out');
        }, 1000);
    });

    tile.appendChild(img);

    grid3.appendChild(tile);
}

const bigLogo = document.getElementById("big-logo");
const img = document.createElement("img");
img.src = "./images/waraiotoko.png";
bigLogo.appendChild(img);
