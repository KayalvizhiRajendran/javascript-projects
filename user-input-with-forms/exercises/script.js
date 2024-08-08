window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    let testNameInput = document.querySelector("input[name=testName]");
    let testDate = document.querySelector("input[name=testDate]");
    let rocketType = document.querySelector("input[name=rocketType]");
    let boosterCount = document.querySelector("input[name=boosterCount]");
    let windRating = document.querySelector("input[name=windRating]");
    let productionServers = document.querySelector("input[name=productionServers]");

    if (testNameInput.value === "" || testDate.value === "" || rocketType.value === ""
        || boosterCount.value === "" || windRating.value === ""
        || productionServers.value === "") {
        alert("All fields are required!");
        // stop the form submission
        event.preventDefault();
    }

    if(productionServers.checked){
        productionServers.value = "On";
    }else{
        productionServers.value = "Off";
    }
    });
});

