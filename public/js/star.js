const stars = Array.from(document.querySelectorAll('.star')).reverse()
const starInputs = Array.from(document.querySelectorAll('.star--input')).reverse()
const createPostWrapper = document.querySelector('.stars-wrapper')
const [white, gold] = ['#fff', '#FFE55C']


createPostWrapper.addEventListener('click', (e) => {
    if (e.target.className === 'stars-wrapper' || e.target.classList[0] === 'close--icon') {
        createPostWrapper.style.display = 'none'

        // reset star colors
        stars.forEach(star => {
            star.style.color = white
        })

        stars[0].style.color = gold

        starInputs.forEach(input => {
            input.checked = false
        })

        starInputs[0].checked = true
    }
})

stars.forEach((star, i) => {
    star.addEventListener('click', () => {
        stars.slice(1).forEach(star => star.style.color = white)

        // color stars before
        for (let j = 0; j <= i; j++) {
            stars[j].style.color = gold
            console.log(stars[j])
        }
    })
})