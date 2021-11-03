// seclect navbar menu
const navBar = document.querySelector('.navbar')
const navHeight = navBar.getBoundingClientRect().height;

// navbar scrool funtion
document.addEventListener('scroll', () => {

    if(window.pageYOffset > navHeight/2) {
        navBar.classList.add('navigation');
    }else {
        navBar.classList.remove('navigation');
    }
})

//handle scrolling when tapping on the navbar menu
const navbarmenu = document.querySelector('.navbar__menu')

// 엘리가 짠 코드
navbarmenu.addEventListener('click', (event) => {
    const target = event.target
    const link = target.dataset.link

    if(link === null){
        return
    }

    console.log(event.target.dataset.link)
    const scrollTo = document.querySelector(link)
    scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
})




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
