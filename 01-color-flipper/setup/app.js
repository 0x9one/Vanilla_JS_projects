const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn    = document.getElementById('btn')
const color  = document.querySelector('.color')

// create a generate function for a number
    // creat a math function call random
        // but the problem random method just give a random number between 0 - 1 like 0.7876643
            // and the problem of random it will not go more than 0. so we have to multiply with length of colors array
                // and for last step we have to add a Floor method that can round a float number  
function getRandNum() {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', (e) => {
    // get random number between 0 and 3
    const randomNum = getRandNum()
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})