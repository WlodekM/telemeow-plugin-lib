libs.use("settings")

settings.addSettingsPage("test", {
    displayName: "Test settings page",
    func () {
        // Scrolls to top
        setTop();
        // Get settings page element
        let pageContainer = document.querySelector(".settings");
        // Set page content
        pageContainer.innerHTML = `<h1>Example plugin settings page</h1>
        <p id="counter">Count: 0</p>
        <button class="button" id="button">Click me!</button>`;

        let count = 0
        let counter = document.getElementById("counter");
        let button = document.getElementById("button");

        button.addEventListener("click", function () {
            count++;
            counter.innerText = `Count: ${count}`
        })
    }
})