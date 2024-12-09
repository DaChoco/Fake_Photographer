const home = document.getElementById('home-page');
const about = document.getElementById('about-page');

const navlinks = document.querySelectorAll('navbar-links')

const homeSect = document.getElementById('hero');
const aboutSect = document.getElementById('About me')


document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', ()=>{
        let viewingHome = homeSect.getBoundingClientRect();
        let viewingAbout = aboutSect.getBoundingClientRect();

        if (viewingHome.bottom >= 0 && viewingHome.top <= window.innerHeight){
            console.log('This element is visible');

            
        }
        else{
            console.log('This element is not visible');
        }

        if (viewingAbout.bottom>=0 && viewingHome.top <= window.innerHeight){
            console.log('You can see about');
        }
        else{
            console.log('You cannot');
        }
    })
})