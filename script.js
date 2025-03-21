const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or light Images

function imageMode(color){
    console.log(color)
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
    toggleIcon.children[0].textContent =  `${color} mode`;

    
}
//DarkMode Function

function darkMode(){
    nav.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor= 'rgb(255 255 255 / 50%)';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
    
}

//Light Mode function

function lighMode(){
    nav.style.backgroundColor= 'rgb(255 255 255  / 50%)';
    textBox.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');

}
//Switch Theme function

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        lighMode();

    }
}
//Event Listener

toggleSwitch.addEventListener('change', switchTheme);