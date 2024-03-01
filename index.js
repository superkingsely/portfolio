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
mobileMenu.addEventListener('click',()=>{
    mobileMenu.classList.remove('show')
    img.setAttribute('src','menu-line.png')


})

// no customization

ScrollReveal({
    reset:true,
    distance:'100px',
    duration:3000,
    // delay:2000
});

// nw to make use of the scroll

ScrollReveal().reveal('.home-content, .about-content',{origin:'left'});
ScrollReveal().reveal('.home-img, .about-img',{origin:'right'});

// ScrollReveal().reveal('.home-content', { duration: 2000, origin: 'top', distance: '100px' });

// typed js
const typed=new Typed('.niche',{
    strings:['Frontend-developer','Backend-developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})