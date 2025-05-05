const ratingButtons = document.querySelectorAll('.ratingButton');
const ratingCard = document.querySelector('#ratingCard');
const thankYouCard = document.querySelector('#thankYouCard');
const submitButton = document.querySelector('#submit');
let selectedRating = null;


ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        ratingButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        selectedRating = button.getAttribute('data-value');
        document.querySelector('#selectedRating').innerText = selectedRating;
        
    })
});


submitButton.addEventListener('click', () => {
    if (selectedRating) {
        ratingCard.style.display = "none";
        thankYouCard.style.display = "flex";
    } else {
        alert("Please select a rating before submitting.");
    }
})