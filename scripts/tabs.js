const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
const tabsTitle = document.querySelector('.card-details__title')
const tabsPrice = document.querySelector('.card-details__price')
const tabsImage = document.querySelector('.card__image_item')
// const titleDocum = document.title
// console.log(titleDocum)
 
console.log('tabsImage', tabsImage)
const tabsOptions = [
    {
        name: 'Graphite', 
        memory: '128',
        price: 60000,
        image: 'img/iPhone-graphite.webp'
    }, 
    {
        name: 'Silver', 
        memory: '256',
        price: 65000,
        image: 'img/iPhone-sierra_blue.webp'
    }, 
    {
        name: 'Sierra Blue', 
        memory: '512',
        price: 70000,
        image: 'img/iPhone-silver.webp'
    }, 
]

const changeContent = (index) => {
    console.log(tabsOptions[index].name)
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
    tabsPrice.textContent = `${tabsOptions[index].price}₽`
    
    tabsImage.setAttribute('src', tabsOptions[index].image)
    // titleDocum.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
    document.title = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
}

    const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active')       //массив классов , удаление 

        if (index == indexClickedTab) {   // indexClickedTab передаем в функцию 
            tab.classList.add('active') 
        }
    })
    changeContent(indexClickedTab)
    console.log(indexClickedTab)
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        changeActiveTabs(index)
    })
    

})
changeContent(0)    // сбрасываем значение верстки 0 - первый элемент массива
}
tabsFunc()