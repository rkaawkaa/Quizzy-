$(".main-title").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".main-title").hover(function(){
    $(this).addClass("animated");        
  })

const prevSlideTheme = document.getElementById("prev");
const nextSlideTheme = document.getElementById("next");
const imgRight = document.getElementById("img-right");
const slidesTheme = document.querySelectorAll('.slide-theme');
const themeText = document.querySelectorAll('.theme-text');
const dots = document.querySelectorAll('.dot');
const themesContainer = document.getElementById('themescontainer');
const mainTitleTwo = document.getElementsByClassName("main-title")[1];
const arrowDown = document.getElementsByClassName("arrow-down")[0];







const backgroundData = [
  {
    theme: "Histoire",
    alt: "Soldats en campagne.",
    description:"Mesurez vos connaissances en histoire en repondant à des questions sur les guerres, les grandes récessions économiques ou encore sur les grandes figures historiques !",
    bgwelcome: 'https://images.unsplash.com/photo-1605811784653-ee4e230bd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    theme: "Philosophie",
    alt: "Bustes de différents philosophes.",
    description:"Connaissez-vous vraiment la philosophie française, allemande ou encore celle de la Grèce antique sur le bout des doigts ?",
    bgwelcome: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme: "Sciences",
    alt: "Energie et éléctricité",
    description:"Souvenez-vous de vos cours de lycées ! Physique, biologie, chimie, tout y passera !",
    bgwelcome: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme: "Littérature",
    alt: "Librairie contenant des centaiens de livres.",
    description:"Flaubert, Proust, Dostoïevsky : savez-vous vraiment ce que ces génies de la littérature ont écrits ?",
    bgwelcome: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80',
  },
  {
    theme: "Sport",
    alt: "Homme nageant le papillon.",
    description:"Coupe du monde de football, JO, Rolland Garros: montrez-nous vos connaissances sportives !",
    bgwelcome: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme:"Art",
    alt: "Fresque murale representant une femme",
    description:"\"L'art ne fait pas qu'illustrer, il fait vivre\" disait Nicolas ROBERT. Essayez-vous à notre quizz sur l'art !",
    bgwelcome: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80',
  }
  
]
//Toutes mes données
let intervalId='';

const autoRefresh = () => {
  intervalId =setInterval(()=> {

    autoChangeBackground();

  },6000)
}
autoRefresh();
const manualRefresh = () => {
  clearInterval(intervalId);

  autoRefresh();

}


var currentSlide = 0;
changeBackground(currentSlide);
showSlide(currentSlide);
goSlide(currentSlide);
showThemes();
//Fonction au démarrage

//Changement automatique des données
function autoChangeBackground() {
  currentSlide += 1;
  if( currentSlide == 6) {
    currentSlide = 0;
  }
  
  showSlide(currentSlide);
  changeBackground(currentSlide);
}



arrowDown.addEventListener('click', bounceTitle)


prevSlideTheme.addEventListener('click', ()=> {
  currentSlide -= 1;
  showSlide(currentSlide);
  changeBackground(currentSlide);
  manualRefresh();
 
  

})
nextSlideTheme.addEventListener('click', ()=> {
  currentSlide += 1;
  showSlide(currentSlide);
  changeBackground(currentSlide);
  manualRefresh();
 
})



function goSlide(n) {
  manualRefresh();
  currentSlide = n;
  showSlide(currentSlide);
  changeBackground(currentSlide); 
  
}

function showSlide(n) {
  
  if(n < 0) {
    currentSlide = slidesTheme.length -1;
    
  } else if ( n > (slidesTheme.length - 1)) {
    currentSlide = 0;
    
  } else {
    
  }
  slidesTheme.forEach(function(theme) {
    theme.classList.remove('active');
  })
  slidesTheme[currentSlide].classList.add('active');
  dots.forEach(function(dot){
    dot.classList.remove('active');
  })
  dots[currentSlide].classList.add('active');
}




function changeBackground(currentSlide) {
  imgRight.style.opacity = 0.3;
  themeText[currentSlide].style.opacity = 0.2;
  changeOpacity();
  var bg_url = (backgroundData[currentSlide]['bgwelcome']);
  imgRight.style.backgroundImage= ("url('"+bg_url+"')");
}


async function bounceTitle() {
  await sleep(700);
  mainTitleTwo.classList.add('animated');
}


async function changeOpacity() {
  var opacit = 0.3;
  for(let i = 0; i<50; i++) {
    await sleep(10);
    opacit += 0.014;
    imgRight.style.opacity = opacit;
    themeText[currentSlide].style.opacity = opacit;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function showThemes() {
  themesContainer.innerHTML="";
  for (let i = 0; i < backgroundData.length; i++) {
    themeEl = document.createElement('div');
    themeEl.classList.add('card');
    themeEl.innerHTML = `
    <div class="blur"></div>
  <img src=${backgroundData[i].bgwelcome} alt="${backgroundData[i].alt}">
  <div class="theme-info">
      <h3 class="theme-text">${backgroundData[i].theme}</h3>

  </div>
  <div class="overview">
      <h3 class="theme-text">${backgroundData[i].theme}</h3>
      <p>${backgroundData[i].description}</p>
  </div>`
  themesContainer.appendChild(themeEl);

  }
}



