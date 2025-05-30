const grid = document.getElementById("grid");
const grid2 = document.getElementById("grid2");
const grid3 = document.getElementById("grid3");
const sizes = ["size-1x1", "size-2x2", "size-3x3", "size-4x4"];

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    tile.className = `tile ${size} laughShake2`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";
    tile.appendChild(img);

    grid.appendChild(tile);
}

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    tile.className = `tile ${size} laughShake1`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";
    tile.appendChild(img);

    grid2.appendChild(tile);
}

for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    tile.className = `tile ${size} laughShake2`;

    const img = document.createElement("img");
    img.src = "./images/waraiotoko.png";
    tile.appendChild(img);

    grid3.appendChild(tile);
}

const bigLogo = document.getElementById("big-logo");
const img = document.createElement("img");
img.src = "./images/waraiotoko.png";
bigLogo.appendChild(img);
