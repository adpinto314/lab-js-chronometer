class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null ;
  }

  start(printTimeCallback) {

    if (printTimeCallback){
      this.intervalId = setInterval( () => {
        this.currentTime = this.currentTime +1;
        printTimeCallback();
      } , 1000)
    } else {
      this.intervalId = setInterval( () => {
        this.currentTime = this.currentTime +1;
      } , 1000)
      }

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`
    } 
    if (value > 10) {
      return `${value}`
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let PrintMins = compteTwoDigitNumber(getMinutes())
    let PrintScds = compteTwoDigitNumber(getSeconds())
    console.log(`${PrintMins}:${PrintScds}`)
    return `${PrintMins}:${PrintScds}`
  }
}
