const stars = document.querySelectorAll(".fa-star");
// console.log(stars);
const emojis = document.querySelectorAll(".far");
const ratingText = document.querySelector(".rating-text");
const colors = [
    "red",
    "orange",
    "lightblue",
    "lightgreen",
    "green"
];
const texts = [
        "very poor",
        "poor",
        "good",
        "very good",
        "excellent"
    ]
    //console.log(emojis)
updateRating(0);
stars.forEach((star, index) => {
    star.addEventListener('click', (event) => {
        // console.log("clicked", index);
        updateRating(index);
    })
})

function updateRating(index) {
    stars.forEach((star, id) => {
        if (id < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colors[index]
        ratingText.innerHTML = texts[index];
    })
}