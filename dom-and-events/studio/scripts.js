// Write your JavaScript code here.
window.addEventListener("load", () => {
  let takeOff = document.getElementById("takeoff");
  let image = document.getElementById("rocket");
  image.style.position = "absolute";
  image.style.bottom = "0px";
  image.style.left = "0px";

  takeOff.addEventListener("click", function (event) {
    let confirmation = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (confirmation === true) {
      let flightStatus = document.getElementById("flightStatus");
      let backgroudColor = document.getElementById("shuttleBackground");
      let height = document.getElementById("spaceShuttleHeight");

      flightStatus.innerHTML = "Shuttle in flight.";
      backgroudColor.style.backgroundColor = "blue";
      height.innerHTML = parseInt(height.innerHTML) + 10000;
    }
  });

  let landButton = document.getElementById("landing");
  landButton.addEventListener("click", function (event) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    let flightStatus = document.getElementById("flightStatus");
    let backgroudColor = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");

    flightStatus.innerHTML = "The shuttle has landed.";
    backgroudColor.style.backgroundColor = "green";
    height.innerHTML = 0;
  });

  let abortButton = document.getElementById("missionAbort");
  abortButton.addEventListener("click", function (event) {
    let confirmation = window.confirm(
      "Confirm that you want to abort the mission."
    );

    if (confirmation === true) {
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerHTML = "Mission Aborted.";

      let backgroudColor = document.getElementById("shuttleBackground");
      backgroudColor.style.backgroundColor = "green";
      let height = document.getElementById("spaceShuttleHeight");
      height.innerHTML = 0;
    }
  });

  let upButton = document.getElementById("up");
  upButton.addEventListener("click", function (event) {
    let image = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");

    image.style.bottom = parseInt(image.style.bottom) + 10+ "px";
    height.innerHTML = parseInt(height.innerHTML) + 10000;
  });

  let leftButton = document.getElementById("left");
  downButton.addEventListener("click", function (event) {
    let image = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");

    image.style.left = parseInt(image.style.bottom) - 10+ "px";
    height.innerHTML = parseInt(height.innerHTML) - 10000;
  });

  let rightButton = document.getElementById("right");
  upButton.addEventListener("click", function (event) {
    let image = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");

    image.style.left = parseInt(image.style.left) + 10+ "px";
  });

  let downButton = document.getElementById("down");
  downButton.addEventListener("click", function (event) {
    let image = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");

    image.style.right = parseInt(image.style.right) - 10+ "px";
  });
});

// Remember to pay attention to page loading!
