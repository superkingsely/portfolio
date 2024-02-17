const handburger=document.querySelector('.mobile-menu-button')
const mobileMenu=document.querySelector('.menu.mobile-menu')
const img=document.querySelector('span img')
console.log(img)
handburger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('show')
    if(mobileMenu.classList.contains('show')){

        img.setAttribute('src','close-line.png')
    }else{
        img.setAttribute('src','menu-line.png')
    }
})