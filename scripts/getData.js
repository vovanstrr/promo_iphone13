const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const addBtn = document.querySelector('.cross-sell__add')
    // console.log('addBtn', addBtn)
    // console.log(list)
    
    let stack = 4
    let count = 1

    const render = (data) => {
        list.innerHTML = ''

        data.forEach(item => {
            // console.log(item)
            list.insertAdjacentHTML('beforeend', `
                    <li>
						<article class="cross-sell__item">
							<img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
							<h3 class="cross-sell__title">${item.name}</h3>
							<p class="cross-sell__price">${item.price}₽</p>
							<button type="button" class="button button_buy cross-sell__button">Купить</button>
						</article>
					</li>
            `)
        })

    }
    const sliceAray = (data, index) => {
        return data.slice(0, index)
    }

    const changeData = (data) => {
        const newStack = stack * count

        render(sliceAray(data, newStack))

        if (data.length > newStack) {
            count++
        } else {
            addBtn.style.display = 'none'
        }
    }

    const getGoods = () => {
        
        fetch('/cross-sell-dbase/dbase.json')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('data error')
                }

            })
            .then((data) => {
                changeData(data)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }
    
    addBtn.addEventListener('click', getGoods)
    getGoods()
    
    // .finally(() => {
    //     console.log('finnaly')
    // })

}

getData()