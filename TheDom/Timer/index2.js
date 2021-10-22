//more precise one--recreate w/Jack's code

let count = 10
let currentCount = document.getElementById('timer')
//console.log(currentCount)

function timer (count) {
  setTimeout(ticker, 1000)

  function ticker () {
    //prints count to console console.log(count)
    count = count - 1

    currentCount.textContent = count //let currentCount = document.getElementById('timer')
    //console.log(currentCount)--print text content of count

    if (count <= 0) {
      currentCount.textContent = 'the count has ended'
    } else {
      setTimeout(ticker, 1000) //else timeout. if this doesn't happen
    }
  }
}

timer(10)
