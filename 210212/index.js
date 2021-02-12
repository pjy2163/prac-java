const clockcontainer=document.querySelector(".js-clock"),
    clockTitle = clockcontainer.querySelector("h2") ;

    function getTime() {
      const xmasDay = new Date("2021-12-24:00:00:00+0900");
      const today = new Date().getTime();
      const gap = xmasDay - today ;
      const days = Math.floor(gap/(1000*60*60*24));
      const hours = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
        minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ?
          `0${seconds}` : seconds}s` ;

          }
          function init() {

            getTime() ;
            setInterval(getTime, 1000) ;

            }
           init();
