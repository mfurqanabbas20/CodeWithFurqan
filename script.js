const accordian = document.querySelectorAll('.accordian');

accordian.forEach(accordian => {
    const answer = accordian.querySelector('.answer');
    accordian.addEventListener('click', () => {
        if(answer.classList.contains('active')) {
            answer.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else {
            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})
let counter = 0;
const hamburger = document.getElementById('hamburger');
const hamburger_menu = document.getElementById('hamburger-menu');
hamburger.addEventListener('click', () => {
    counter++;
    if(counter % 2 != 0) {
        hamburger_menu.style.display = 'flex';   
    }
    else {
        hamburger_menu.style.display = 'none';
    }
    console.log('clicked')

});
