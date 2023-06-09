function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
console.log(result.substring(0, result.length - 1))

// to make the 'toast' feature work:
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    console.log("button clicked")
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}