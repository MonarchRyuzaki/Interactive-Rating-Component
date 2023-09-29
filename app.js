const formBtn = document.querySelector('.rating-submit');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedRadioBtn = document.querySelector('input[name="radioGroup"]:checked');
    if (selectedRadioBtn){
        const value = selectedRadioBtn.value;
        const displayVal = document.querySelector('.given-rating-value');
        displayVal.innerText = value;
        const ratingForm = document.querySelector('.rating-state');
        const thankYou = document.querySelector('.thank-you');
        ratingForm.classList.toggle('hide');
        thankYou.classList.toggle('hide');
    }
})