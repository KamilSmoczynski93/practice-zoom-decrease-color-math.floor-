const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let changeSize = 36

const zoom = () => {
    changeSize+=5
	p.style.fontSize = changeSize + 'px'

    
}

const reducing = () => {

    if(changeSize <= 15) {
        return
    }

    changeSize-=5
	p.style.fontSize = changeSize + 'px'
    
    
}
const changeColor = () => {
	
	const r = Math.floor(Math.random() * 255)
	
	const g = Math.floor(Math.random() * 255)
	
	const b = Math.floor(Math.random() * 255)

	p.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUp.addEventListener('click', zoom)
sizeDown.addEventListener('click', reducing)
colorBtn.addEventListener('click', changeColor)
