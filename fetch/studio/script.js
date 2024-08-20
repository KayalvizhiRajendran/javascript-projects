//TODO: Add Your Code Below
window.addEventListener("load", () => {
    fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    ).then((response) => {
      response.json().then((json) => {
        const container = document.getElementById("container");
        let content = "";
        for (astronaut of json) {
          content += `
              <div class="astronaut">
                  <div class="bio">
                      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                      <ul>
                          <li>Hours in space: ${astronaut.hoursInSpace}</li>
                          <li>Active: ${astronaut.active}</li>
                          <li>Skills: ${astronaut.skills.join(", ")}</li>
                      </ul>
                  </div>
                  <img class="avatar" src="${astronaut.picture}"/>
              </div>
          `;
        }
        container.innerHTML = content;
      });
    });
  });