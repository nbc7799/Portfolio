//------- seclect navbar menu
const navBar = document.querySelector('.navbar')
const navHeight = navBar.getBoundingClientRect().height;

//-------- navbar scrool funtion
document.addEventListener('scroll', () => {

    if(window.pageYOffset > navHeight/2) {
        navBar.classList.add('navigation');
    }else {
        navBar.classList.remove('navigation');
    }
})

//-------handle scrolling when tapping on the navbar menu
const navbarmenu = document.querySelector('.navbar__menu')

navbarmenu.addEventListener('click', (event) => {
    const target = event.target
    const link = target.dataset.link
//이렇게 두번나눠서 쓰는이유는 나중에 target의 다른항목에 또 접근해야
//할 일이생길때 중복해서 쓰지않기위함  즉 이게 더 효율적!!

    if(link === null){
        return
    }
    scrollIntoView(link)
})


//------------ handle scrolling when tapping on the contact button
const contactBtn = document.querySelector('.home__contact')

contactBtn.addEventListener('click', () => {
    scrollIntoView('.contact')
})


// -------- Transparent home
const padeHome = document.querySelector('.pade-home')
const homeCont = document.querySelector('.home-container')
const homeHight = homeCont.getBoundingClientRect().height;

document.addEventListener('scroll', () => {

    if(window.pageYOffset <= homeHight) {
        const opacity =  1 - window.pageYOffset / homeHight
        homeCont.style.opacity = opacity;
    }
    
})

//Show Arrow up btn
const upBtn = document.querySelector('.up-button')
const skills = document.querySelector('.skills')
const skillsHight = skills.getBoundingClientRect().height

document.addEventListener('scroll', () => {
    if(window.pageYOffset <= skillsHight/3) {
        upBtn.classList.remove('visible')
    }else {
        upBtn.classList.add('visible')
    }
})

// click on the ''arrow up'

upBtn.addEventListener('click', () => {
    scrollIntoView('.home')
})

//버튼 두번클릭 안되게
// const handleArrowUp = () => {
//     scrollIntoView('.home');
//     upBtn.removeEventListener('click', handleArrowUp);

//     setTimeout(() => {
//         upBtn.addEventListener('click', handleArrowUp);
//     },1000);
// };

// upBtn.addEventListener('click', handleArrowUp);
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'})
}




// const navbarmenu = document.querySelector('.navbar__menu')

// //내가 짠 코드
// function quickMenu(text) {
//     const home = document.querySelector('.home')
//     const about = document.querySelector('.about')
//     const skills = document.querySelector('.skills')
//     const works = document.querySelector('.works')
//     const contact = document.querySelector('.contact')

//     if(text === 'About' ) {
//         about.scrollIntoView({behavior: 'smooth', block: 'center'});
//     }else if(text === 'Skils') {
//         skills.scrollIntoView({behavior: 'smooth', block: 'center'});
//     }else if(text === 'Works') {
//         works.scrollIntoView({behavior: 'smooth', block: 'center'});
//     }else if(text === 'Contact') {
//         contact.scrollIntoView({behavior: 'smooth'});
//     }else {
//         home.scrollIntoView({behavior: 'smooth'});
//     }
    
// }


// navbarmenu.addEventListener('click', (event)=> {
//     const target = event.target
//     const innerText = target.innerText

//     if(innerText === null ) {
//         return
//     }

//     console.log(innerText)
//    const scrollTo = document.querySelector()
// })
