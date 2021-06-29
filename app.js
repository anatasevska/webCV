
// LOADER
//INIT OF SITE
var loader= document.querySelector('.loader');
var main= document.querySelector('.content');

function init(){
    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display='block';
        setTimeout(()=>{ main.style.opacity = '1' },50) 

    },1500)
}
init();

// TOGGLE MENU 
//Ideally I would've kept a traditional menu without a hamburger
//icon on the desktok since it's better UX 
//Time made me do it as simple as I did. 
var menu=document.getElementById('menu');
var menuItems=document.getElementById('nav');

function toggleMenu(){
    if(menu.classList.contains('close')){
        menu.classList.remove('close');
        menuItems.classList.add('hide')
    }
    else{
        menu.classList.add('close');
        menuItems.classList.remove('hide');
    }
    
}


var menuClickable1=document.getElementsByClassName('clickable')[0];
var menuClickable2=document.getElementsByClassName('clickable')[1];
var menuClickable3=document.getElementsByClassName('clickable')[2];

menuClickable1.addEventListener('click', closeMenu, false);
menuClickable2.addEventListener('click', closeMenu, false);
menuClickable3.addEventListener('click', closeMenu, false);

function closeMenu(){
    menu.classList.remove('close');
    menuItems.classList.add('hide');
}



// SHOW PROJECTS SUBMENU
var projectTitle=document.querySelector('#project-menuItem');
var projectItems=document.getElementById('project-items');
var arrow = document.querySelector('.fa-chevron-down');

projectTitle.addEventListener('click', showProjects, false);

function showProjects(){
    if (projectItems.style.display == "flex") {
        projectItems.style.display = "none";
      } else {
        projectItems.style.display = "flex";
      }
    
    if(arrow.classList.contains('open-arrow')){
        arrow.classList.remove('open-arrow');
    }
    else{
        arrow.classList.add('open-arrow');
    }
}

// PROJECTS LINKS

var reserveit=document.querySelector('#RIproject-img');
var ecomm=document.querySelector('#ECproject-img');

//<a href> is a mess so here's this instead 
reserveit.addEventListener('click', ()=>{ window.open('https://wonderful-varahamihira-ef5739.netlify.app/') }, false);
ecomm.addEventListener('click', ()=>{ window.open('https://objective-lumiere-3e31c0.netlify.app/')}, false);



//HELLO BTN

var helloBtn=document.querySelector('.hello-btn');

helloBtn.addEventListener('click', coolEffectOn, false );

function coolEffectOn(){
    helloBtn.classList.remove('hello-hover')
    setTimeout(()=>{
        helloBtn.classList.add('helloBtn-effect')
        setTimeout(()=>{ 
            helloBtn.classList.add('helloBtn-effectFinish')
        },300)
    },300)
}
