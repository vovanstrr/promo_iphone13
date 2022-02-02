const sendForm = () => {
    const cardBtn = document.querySelector('.card-details__button_delivery')
    const cardDetailsTitle = document.querySelector('.card-details__title')

    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.modal__title')
    const modalCloseBtn = document.querySelector('.modal__close')
    const modalForm = modal.querySelector('form')


    // console.log(modalLabel)
    console.log(cardBtn)
    console.log(modal)

    cardBtn.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const modalLabel = modal.querySelectorAll('.modal__label')
        const sendMessage = {}

        modalLabel.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })

        console.log(sendMessage)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({sendMessage}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('send...')
                
                modalLabel.forEach(label => {
                    
                    const input = label.querySelector('input')
                    input.value = ''      
                })
                
                modal.style.display = 'none'
            })
            
    })

}

sendForm()