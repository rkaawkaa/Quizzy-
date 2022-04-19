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
const backgroundData = [
  {
    theme: "Histoire",
    bgwelcome: 'https://images.unsplash.com/photo-1605811784653-ee4e230bd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    theme: "Philosophie",
    bgwelcome: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme: "Sciences",
    bgwelcome: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme: "Littérature",
    bgwelcome: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80',
  },
  {
    theme: "Sport",
    bgwelcome: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    theme:"Art",
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









