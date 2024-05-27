let img = document.querySelector('img')

document.addEventListener('mousemove', function(mouse){
    let dx = mouse.pageX - window.innerWidth / 2
    let dy = mouse.pageY - window.innerHeight / 2
    let angelX = 60 * dx / window.innerWidth / 2
    let angelY = 60 * dy / window.innerHeight / 2
    img.style.transform = `rotateX(${-angelY}deg) rotateY(${angelX}deg)`
})