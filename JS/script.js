const hour = document.querySelector('.h'),
     min = document.querySelector('.m'),
     sec = document.querySelector('.s')
     hoursNumber = document.querySelector('.hours'),
     minutesNumber = document.querySelector('.minutes')
     
function clock() {
    
    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hour}deg)`
    
    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ?  `0${time.getMinutes()}` : time.getMinutes()
    
    setTimeout(() => {
        clock()
    }, 1000);
    

}

clock()

// setTimeout(() => {
    
// }, timeout);


const tabsItem = document.querySelectorAll('.tabsItem'),
      tabsContentItem = document.querySelectorAll('.tabsContentItem ')
      
      tabsItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAndAddActiveClass(item, tabsItem)
            removeAndAddActiveClass(tabsContentItem[i], tabsContentItem)
        })
      })
   
  
      function removeAndAddActiveClass(element, arr) {
        arr.forEach(item => {
            item.classList.remove('active')
        })
        element.classList.add('active')
      }
