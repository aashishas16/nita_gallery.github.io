const toggleSwitch =document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
// const image1=document.getElementById('image1');
// const image2=document.getElementById('image2');
// const image3=document.getElementById('image3');
// const textBox=document.getElementById('text-box');

//Image Mode function

//Dark mode func

function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 /50%)';
    textBox.style.backgroundColor='rgb(255 255 255/50%)';
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
}

//Light mode func

function lightMode(){
    nav.style.backgroundColor='rgb(255 255 255/50%)';
    textBox.style.backgroundColor='rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}

//Switch Theme
function switchTheme(event){
    if(event.target.checked)
    {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

//Event listener
toggleSwitch.addEventListener('change',switchTheme);

//local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked=true;
        darkMode();
    }
}
