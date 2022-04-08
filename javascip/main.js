const menuBar = document.querySelector ('.menu-bar')
menuBar.addEventListener('click',function(){
    menuBar.classList.toggle('active')
    document.querySelector(".menu-items").classList.toggle('active')
})
const toP = document.querySelector(".menu")
window.addEventListener('scroll', function(){
    const x =this.scrollY
    if (x>80) {
        toP.classList.add('active')
    }else {
        toP.classList.remove('active')
    }
    
})
const menuTitle = document.querySelector('.content-menu')
menuTitle.addEventListener('click',function(x){
    if(x.target.classList.contains('content-btn')) {
        const Taget = x.target.getAttribute('data-title');
        // console.log(Taget)
        menuTitle.querySelector('.active').classList.remove('active');
        x.target.classList.add('active');
        const menuItem = document.querySelector('.content')
        menuItem.querySelector('.content-menu-list.active').classList.remove('active')
        menuItem.querySelector(Taget).classList.add('active')
    }
})
