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
    navbarmenu.classList.remove('open')


})


// const navbarmenu = document.querySelector('.navbar__menu') - jun

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


//-------handle scrolling when tapping on the navbar menu
const navbarmenu = document.querySelector('.navbar__menu')
navbarmenu.addEventListener('click', (event) => {
    const target = event.target
    const link = target.dataset.link
//이렇게 두번나눠서 쓰는이유는 나중에 target의 다른항목에 또 접근해야
//할 일이생길때 중복해서 쓰지않기위함  즉 이게 더 효율적!!
    if(link === null){
        return;
    }
    
    scrollIntoView(link)
})

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn')

navbarToggleBtn.addEventListener('click', () => {
    navbarmenu.classList.toggle('open')

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

// click event when i tapping my work category - jun
// const workCategory = document.querySelector('.work__categories')

// workCategory.addEventListener('click', (event) => {
//     const target = event.target
//     const targetClass = target.dataset.class
//     console.log(targetClass.childNodes)

//     showSelector(targetClass)
// })

// function showSelector (select) {
//     const showSelect = document.querySelectorAll(select)
//     console.log(showSelect)

//     const projects = document.querySelector('.work__projects')
//     const content = showSelect.childNodes

// show work when i tapping my work category
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')


//selectorAll 사용하면 배열로 반환
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    //여기서 span에 숫자 클릭하면 undifiend뜨는데 이안에는 filter가 없기때문
    //그럼  span클릭시 디버깅해서 보면 dataset보면 filter없지만 parentNode가서 dataset보면 filter가 들어있음
    console.log(e.target.nodeName)
    if(filter === null) {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projects.forEach((project) => {
        // forEach사용해서 project안에 project들 각각 if문
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        if(filter === '*' || filter === project.dataset.type) {
            // || or연산자사용해서 둘중에 하나라도 만족하면 나타나게
            project.classList.remove('invisible');
        }else {
            project.classList.add('invisible')
        }
            projectContainer.classList.remove('anim-out');
        },300)
    });



    // 다같은 for구문
    // for(let project of projects)
    // console.log(project)

    // let project;
    // for(let i=0; i < projects.length; i++ ) {
    //     project = projects[i];
    //     console.log(project);
    // }
})

