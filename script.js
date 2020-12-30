const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    // adds class of 'active' and toggles that class
    input.focus()
    // use focus() method to add focus to the input
})