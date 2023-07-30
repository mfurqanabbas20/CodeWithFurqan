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
