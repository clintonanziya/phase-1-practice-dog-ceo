console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch images of dogs and render them to the DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imageContainer.appendChild(imgElement);
            });
        });

    // Challenge 2: Fetch dog breeds and render them to the DOM
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("dog-breeds");

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedList.appendChild(listItem);
            });
        });

    // Challenge 3: Change font color of clicked breed
    breedList.addEventListener("click", event => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to blue upon click
        }
    });

    // Challenge 4: Filter breeds based on selected letter
    const filterDropdown = document.getElementById("breed-dropdown");
    filterDropdown.addEventListener("change", event => {
        const selectedLetter = event.target.value;
        const breedItems = breedList.getElementsByTagName("li");

        // Hide breeds that don't start with the selected letter
        Array.from(breedItems).forEach(item => {
            const breedName = item.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
