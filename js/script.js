function showModalWithSound() {
    document.getElementById("alertModal").style.display = "flex";
    const beepSound = document.getElementById("beepSound");
    beepSound.loop = true;
    beepSound.play();
}

function closeModal() {
    const beepSound = document.getElementById("beepSound");
    beepSound.pause();
    beepSound.currentTime = 0;
    document.getElementById("alertModal").style.display = "none";
}

function drawWaraiotoko(gridName) {
    const grid = document.getElementById(gridName);
    const sizes = ["size-1x1", "size-2x2", "size-3x3", "size-4x4"];
    const laughShakes = ["laughShake1", "laughShake2"];
    let i = 0;

    const drawTileInterval = setInterval(() => {
        const tile = document.createElement("div");
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const laughShake = laughShakes[Math.floor(Math.random() * laughShakes.length)];
        tile.className = `tile ${size} ${laughShake}`;
    
        const img = document.createElement("img");
        img.src = "./images/waraiotoko.png";
        img.alt = "Warai Otoko";

        if (gridName == 'grid3' && i % 3 == 0) {
            img.classList.add('escape-right');
        }

        if (gridName == 'grid3' && i % 3 == 1) {
            img.classList.add('escape-left');
        }

        if (gridName == 'grid3' && i % 4 == 0) {
                img.classList.add('disappear');
        }

        if (gridName == 'grid3' && i % 5 == 0) {
            img.addEventListener("click", showModalWithSound);
        }
    
        tile.appendChild(img);
        grid.appendChild(tile);   

        if (i > 100){
            clearInterval(drawTileInterval);
        } else {
            i++;
        }
    }, 50)
}

window.onload = () => {
    const img = document.getElementById('big-logo-image');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    img.style.left = (screenWidth - img.offsetWidth) / 2 + 'px';
    img.style.top = (screenHeight - img.offsetHeight) / 2 + 'px';

    img.addEventListener('click', () => {
        const laughSoundSrc = "./videos/chipmunks-hehehei-113723.mp3";
        const laughSound = new Audio(laughSoundSrc);
        laughSound.loop = true;
        laughSound.play();
  
        drawWaraiotoko("grid1");
        drawWaraiotoko("grid2");
        drawWaraiotoko("grid3");
    });

    // Initialize(imageHeight = 50vh)
    let posX = (screenWidth - screenHeight) / 2;
    let posY = screenHeight / 2;
    let velX = 9;
    let velY = 5;

    function animate() {
      const imgWidth = img.offsetWidth;

      // Moving
      posX += velX;
      posY += velY;

      // Reflect
      if (posX >= screenWidth - imgWidth || posX <= 0) {
        velX *= -1;
        posX = Math.max(0, Math.min(posX, screenWidth - imgWidth));
      }
      if (posY >= screenHeight - imgWidth|| posY <= 0) {
        velY *= -1;
        posY = Math.max(0, Math.min(posY, screenHeight - imgWidth));
      }

      // Update drawing
      img.style.left = posX + 'px';
      img.style.top = posY + 'px';

      requestAnimationFrame(animate);
      img.removeEventListener('mouseenter', animate);
    }

    img.addEventListener('mouseenter', () => {
        img.style.height = '50vh';
        img.classList.add('selfSpin');
        
        requestAnimationFrame(animate);
    }, {once: true});
}