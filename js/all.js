const filterAIListBtn = document.querySelector('.filterAIListBtn')
const filterTimeBtn = document.querySelector('.filterTimeBtn')
const filterAIList = document.querySelector('.filterAIList')
const filterTimeList = document.querySelector('.filterTimeList')
const AIItems = document.querySelectorAll('.AIItemList .AIItem')
const goTop = document.querySelector('.goTop')
const menuBar = document.querySelector('.menuBar')
const mobileMenu = document.querySelector('.mobileMenu')
const body = document.body

filterAIListBtn.addEventListener('click', () => {
  filterAIList.classList.toggle("active")
})

filterTimeBtn.addEventListener('click', () => {
  filterTimeList.classList.toggle("active")
})

AIItems.forEach(item => {
  item.addEventListener('click', () => {
    AIItems.forEach(aiItem => aiItem.querySelector('a').classList.remove('active'))
    item.querySelector('a').classList.add('active')
  })
})

goTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle("open")
  mobileMenu.classList.toggle("active")
  body.classList.toggle("overflow-hidden")
})
