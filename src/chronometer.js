class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    const intervalId = setInterval((printTimeCallback)=>{
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    let min = (this.currentTime/60);
    let minInt = Math.floor (min)
    return minInt    
    
  }

  getSeconds() {
    
    let sec= this.currentTime % 60 
      return sec  
   
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return "0" + value
    }else if(valor >= 10){
      return `"" ${valor}`// deve devolver un string
    }
  }

  stop() {

    // if(this.currentTime !== 0 ){
    //   return
    // }

    clearInterval(this.intervalId)
    this.currentTime = 0;
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
  }
}
