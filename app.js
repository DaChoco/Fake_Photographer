const home = document.getElementById('home-page');
const about = document.getElementById('about-page');
const portfolio = document.getElementById('portfolio-page');

const body = document.querySelector('body');

let dark = false; //false means dark
let dropopen = false; //false means no drop down

const lightdarktoggle = document.getElementById('light-dark')
const dropdown = document.getElementById('links')
const navbar = document.getElementById('top-bar');

const menubutton = document.getElementById('menu-button')


const homeSect = document.getElementById('hero');
const aboutSect = document.getElementById('About-me')
const portSect = document.getElementById('Portfolio')

//--------------------------------------------------------

function switchIcons(){

    if (dark == false){
        lightdarktoggle.classList.remove('fa-regular');
        lightdarktoggle.classList.add('fa-solid');
        body.classList.add('darkmode');

        lightdarktoggle.style.scale = '1.1';
        dark = true;

        localStorage.setItem('darkmode?', 'true');
    }
    else{
        lightdarktoggle.classList.remove('fa-solid');
        lightdarktoggle.classList.add('fa-regular');
        body.classList.remove('darkmode');
        dark = false;

        localStorage.setItem('darkmode?', 'false');

        let tester = localStorage.getItem('darkmode?')
        console.log(tester);
    }
    
}



document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', ()=>{
        let viewingHome = homeSect.getBoundingClientRect();
        let viewingAbout = aboutSect.getBoundingClientRect();
        let viewingPort = portSect.getBoundingClientRect();

        if (viewingHome.bottom > 0 && viewingHome.top < window.innerHeight){ //hero section 
            console.log('This element is visible');
            home.style.setProperty('--after-width', '100%');
        }
        else{
            console.log('This element is not visible');
            home.style.setProperty('--after-width', '0%');
            
        }

        if (viewingAbout.bottom>0 && viewingAbout.top < (window.innerHeight)){ //about section
            about.style.setProperty('--after-width', '100%');
        }
        else{
            about.style.setProperty('--after-width', '0%');
        }

        if (viewingPort.bottom>0 && viewingPort.top < (window.innerHeight)){ //portfolio photos section
            portfolio.style.setProperty('--after-width', '100%');
        }
        else{
            portfolio.style.setProperty('--after-width', '0%');
        }


    })

    const containers = document.querySelectorAll('.contact-container');
    const textContainer = document.querySelector('.text-container');

    textContainer.classList.add('activated');

    containers.forEach((division) =>{
       
        division.classList.add('activated');

    });
})



lightdarktoggle.addEventListener('click', switchIcons);

window.onload = function(){
    darkString = localStorage.getItem('darkmode?');
    console.log(darkString);

   
    dark = (darkString === "true") ;
    
    if (dark == true) {
        // If dark mode is already on, we only need to make sure the page reflects that state
        lightdarktoggle.classList.remove('fa-regular');
        lightdarktoggle.classList.add('fa-solid');
        body.classList.add('darkmode');
        lightdarktoggle.style.scale = '1.1';
    } 
}

function dropdownMenu(){
    
    if (dropopen == false){
        dropdown.style.display = 'flex';
        navbar.style.height = 'max-content'
        dropdown.style.backgroundColor = '--base-color'
        menubutton.classList.remove('fa-bars')
        menubutton.classList.add('fa-x')

        dropopen = true;
        sessionStorage.setItem('dropped?', 'true');

    }
    else{ // if true
        dropdown.style.display = 'none';
        menubutton.classList.remove('fa-x')
        menubutton.classList.add('fa-bars')
        
        navbar.style.height = '10vh';
        dropopen = false;
        sessionStorage.setItem('dropped?', 'false');
    }
}

menubutton.addEventListener('click', dropdownMenu)


