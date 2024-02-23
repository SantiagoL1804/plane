const fireworksContainer = document.getElementById("fireworks");

const fireworks = new Fireworks(fireworksContainer, {
  /* options */
  delay: { min: 10, max: 15 },
  opacity: 0.1,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 70,
  traceLength: 1,
  traceSpeed: 20,
  explosion: 5,
  intensity: 5,
  flickering: 10,
  lineStyle: "round",
  lineWidth: {
    min: 2,
    max: 5,
  },
});
fireworks.start();

function initializeGame() {
  start.style.zIndex = -1;
  start.style.opacity = 0;

  canvas.classList.remove("canvas1");
  canvas.classList.add("canvas2");

  scoreText.style.display = "block";
  time.style.display = "block";

  //! GENERADOR DE ESTACIONES

  function generateStations() {
    const randomDelay = Math.random() * stationInterval + 2000;

    setTimeout(() => {
      if (stationsArray.length === 0) {
        stationsArray.push(
          new Station(
            1,
            CANVAS_WIDTH,
            CANVAS_HEIGHT,
            Math.ceil(Math.random() * 2)
          )
        );
      }
      stationsArray = stationsArray.filter(
        (station) => !station.markedForDeletion
      );
    }, randomDelay);
  }

  //! SCORE TEXT GENERATOR

  function displayStatusText() {
    scoreText.innerText = `${score}`;
  }

  let plain = new Plain(CANVAS_WIDTH, CANVAS_HEIGHT);

  layer1 = new Layer(backgroundLayer1, 0.2);
  layer2 = new Layer(backgroundLayer2, 0.2);
  layer3 = new Layer(backgroundLayer3, 0.6);
  layer4 = new Layer(backgroundLayer4, 0.8);
  // layer5 = new Layer(backgroundLayer5, 1);

  const layersArray = [layer1, layer2, layer3, layer4];

  //! GENERADOR DE ANIMACIONES

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layersArray.forEach((layer, index) => {
      if (index !== 3) {
        layer.update();
        layer.draw();
      }
    });

    if (!gameOver.classList.contains("gameOverOn")) {
      stationsArray.forEach((station) => {
        station.draw(ctx);
        station.update();
      });
    }
    carsArray.forEach((car) => {
      car.draw(ctx);
      car.update();
    });

    plain.draw(ctx);

    layersArray[3].draw(ctx);
    layersArray[3].update();

    if (!gameOver.classList.contains("gameOverOn")) {
      displayStatusText(ctx);
    }
    requestAnimationFrame(animate);
  }

  //!

  animate(0);

  if (initialLoad) {
    setTimeout(() => {
      stationsArray.push(
        new Station(
          1,
          CANVAS_WIDTH,
          CANVAS_HEIGHT,
          Math.ceil(Math.random() * 2)
        )
      );
    }, Math.random() * 1000);

    initialLoad = false;
  }

  setInterval(() => {
    if (!gameOver.classList.contains("gameOverOn")) {
      generateStations();
    }
  }, 500);

  canvas.addEventListener("click", () => {
    stationsArray.forEach((station) => {
      plain.check(station);
    });
  });

  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    stationsArray.forEach((station) => {
      plain.check(station);
    });
  });

  //! Descomentar esto

  setTimeout(() => {
    popupScore.innerHTML += score === 1 ? ` 1 punto!` : ` ${score} puntos!`;
    gameOver.classList.add("gameOverOn");
    gameOver.classList.remove("gameOverOff");
  }, 20000);

  setInterval(() => {
    timer -= 1;
    time.innerText = `00:${timer}`;
  }, 1000);

  setInterval(() => {
    if (!gameOver.classList.contains("gameOverOn")) {
      gameSpeed += 0.5;
    }
  }, 5000);

  window.addEventListener("resize", () => {
    CANVAS_WIDTH = window.innerWidth - 50;
    CANVAS_HEIGHT = window.innerHeight - 50;
  });
}

buttonStart.addEventListener("click", () => {
  initializeGame();
});

buttonStart.addEventListener("touchstart", (e) => {
  e.preventDefault();
  initializeGame();
});
