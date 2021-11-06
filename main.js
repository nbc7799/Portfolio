//------- seclect navbar menu
const navBar = document.querySelector('.navbar')
const navHeight = navBar.getBoundingClientRect().height;
const navbarmenu = document.querySelector('.navbar__menu')
//-------- navbar scrool funtion that add navigation class
window.addEventListener('scroll', () => {
    if(window.pageYOffset > navHeight/2) {
        navBar.classList.add('navigation');
    }else {
        navBar.classList.remove('navigation');
    }
    navbarmenu.classList.remove('open')
})

// -------- Active Navbar munu icon when scrolling the menuY -jun
    // const sections = document.querySelectorAll('section')

    
    // function memuActive(btn) {
    //     const childs = navbarmenu.children
    //     for(let child of childs) {
    //         if(child.dataset.link === btn){
    //             child.classList.add('active')
    //         }else {
    //             child.classList.remove('active')
    //         }
    //     }
    // }

    // const options = {
    //     root: null,
    //     threshold: 0.7,
    // }
    
    // const callback = (entries, observer) => {
    //     entries.forEach((entry) => {
    //         if(entry.isIntersecting) {
    //             const target = entry.target
    //             const btn = target.dataset.btn
    //             memuActive(btn)
    //         }
    //     })
    // }

    // const observer = new IntersectionObserver(callback, options)
    // sections.forEach((section) => observer.observe(section));



// -------- Active Navbar munu icon when scrolling the menuY -eliie
// 1. 모든 섹션 요소들을 가지고 온다
// 2. IntersectionObserver 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
const sectionClasses = [
    '.home',
    '.about',
    '.skills',
    '.works',
    '.contact',
]
console.log(sectionClasses)
const sections = sectionClasses.map(id => document.querySelector(id));
//sections에는 만약 home이 들어가면 '.home' 이런 형태로 들어간다
console.log(sections)
const navItems = sectionClasses.map(id => document.querySelector(`[data-link="${id}"]`))
console.log(typeof(navItems), navItems)
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
    selectedNavItem.classList.remove('active')
    selectedNavItem = selected;
    selectedNavItem.classList.add('active')
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0) {
            console.log(entry)
        const index = sectionClasses.indexOf(`${entry.target.dataset.btn}`)
        //스크롤링이 아래로 되어서 페이지가 올라옴
        if(entry.boundingClientRect.y < 0) {
            selectedNavIndex = index + 1 ;
        }else {
            selectedNavIndex = index -1;
        }
        }
    })
};

const observer = new IntersectionObserver(observerCallback, observerOptions );
sections.forEach(section => observer.observe(section))

window.addEventListener('wheel', () => {
    if(window.scrollY === 0) {
        selectedNavIndex = 0;
    }else if( window.scrollY + window.innerHeight === document.body.clientHeight){
        selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);
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

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'})
    selectNavItem(navItems[sectionClasses.indexOf(selector)])
}

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
    if(window.pageYOffset <= skillsHight) {
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


// show work when i tapping my work category - ellie
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
    projectContainer.classList.add('animation-out');
    setTimeout(() => {
        if(filter === '*' || filter === project.dataset.type) {
            // || or연산자사용해서 둘중에 하나라도 만족하면 나타나게
            project.classList.remove('invisible');
        }else {
            project.classList.add('invisible')
        }
            projectContainer.classList.remove('animation-out');
            // 'anim-out'은 밑에서 위로 올라오는 효과
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
