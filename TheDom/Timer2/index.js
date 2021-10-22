//--------global variables------//
let count = 10
let currentCount = document.getElementById('timer')
//console.log(currentCount) a console log that checks the current count
let idForTimerProcess = null //GENERATE A BETTER NAME FOR THIS -- can this just be blank

//--------------DOM queries.------------//
let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')
let resetButton = document.getElementById('resetButton')

//---------Start stop and reset functions---------//
function startIt () {
  //call the function timer and start it
  timer(count)
  //console.log('hi in start function') just a console log that checks if you entered the start function
}

function stopIt () {
  //clearInterval (stop) works on idForTimerProcess a.k.a. timer value from timer() in progress
  clearInterval(idForTimerProcess)
}

function resetIt () {
  //reset timer to original value, clear intervals
  count = 10
}

//--------------Event listeners------------//
startButton.addEventListener('click', evt => {
  startButton.disabled = true
  startIt()
})

stopButton.addEventListener('click', evt => {
  stopIt()
  startButton.disabled = false
})

resetButton.addEventListener('click', evt => {
  resetIt()
})

//---timer function to do the counting!--//
function timer () {
  idForTimerProcess = setTimeout(ticker, 1000) //id for timer in this global variable (which was initially set to null)--setTimeOut will wait 1000 sec and then call ticker to generate the countdown

  function ticker () {
    //prints count to console console.log(count)

    count = count - 1
    //decrements count by one each time

    currentCount.textContent = count

    if (count <= 0) {
      currentCount.textContent = 'the count has ended'
    } else {
      idForTimerProcess = setTimeout(ticker, 1000) //else timeout. if this doesn't happen
    }
  }
}
