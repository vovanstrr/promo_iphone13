const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')
    // console.log(chItems)
    
    chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')
        // console.log('chButton', chButton)
        chContent.style.height = ''

        chButton.addEventListener('click', () => {
            if (chContent.classList.contains('open')) {
                // chContent.classList.remove('open')
                chContent.style.height = ''
            } else {
                // chContent.classList.add('open')
                // chContent.classList.add('active')
                console.log('chContent', chContent)
                chItems.forEach((it) => {
                    const chContent1 = it.querySelector('.characteristics__description')
                    const chButton1 = it.querySelector('.characteristics__title')
                    if (chContent1.style.height > 0 + 'px') {
                        chContent1.style.height = ''
                        chButton1.classList.remove('active')
                        chContent1.classList.remove('open')
                        // console.log('chContent1.style.height')
                    }
                })

                chContent.style.height = chContent.scrollHeight + 'px'
                    

              
                
                // console.log(chContent.scrollHeight)
            }
            chButton.classList.toggle('active')  //меняет стрелочку на выпадающем списке
            chContent.classList.toggle('open')  // метод проверяет если есть класс - удаляет, если нет - добавляет 

            
        })
    })
    
}
accordeon()

