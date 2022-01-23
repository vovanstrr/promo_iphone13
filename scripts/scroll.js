const scrollFunc = () => {

// document.querySelector('.header-menu__logo').style.border = '1px solid red'

// link = document.querySelector('.header-menu__item a')
const links = document.querySelectorAll('.header-menu__item a')
const linkCharacteristics = document.querySelector('.card-details__link-characteristics')
const newArray = [...links, linkCharacteristics]   //spret оператор
// console.log(newArray)
// console.log(links)

newArray.forEach((element, index, array) => {
    // console.dir(element)
    // element.onclick = () => {
    //     console.log('click')
    // }
    seamless.polyfill();

    element.addEventListener('click', (event) => {
        event.preventDefault()    // запускаем метод отменяем стандарное поведение браезура
        // console.log(event.target, 'click')

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            console.log(section)
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })    //метод scrollIntoView настраиваемый
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
            // console.log('no')
        }
        

        // if (id !== '#') {
        //     const section = document.querySelector(id)
        //     console.log(section)
        // } else {
        //     console.log('У этого элемента нет ссылки')
        // }
    })

    // element.style.border = '1px solid green'
    // console.log(index)
    // console.log(array)
});

// for(let i = 0; i < array.length; i++) {
//     console.log('for', array[i])
// }

// array.forEach((elem) => {
//     console.log('foreach metod ', elem)
// })
}

scrollFunc()