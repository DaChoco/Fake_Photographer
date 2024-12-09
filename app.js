const home = document.getElementById('home-page');
const about = document.getElementById('about-page');
const portfolio = document.getElementById('portfolio-page');


const homeSect = document.getElementById('hero');
const aboutSect = document.getElementById('About-me')
const portSect = document.getElementById('Portfolio')


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