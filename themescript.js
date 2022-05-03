const newButtonTheme = document.querySelector('.tme-btn-new');
const themeBox = document.querySelector('.tme-box');


/*onclick elements : */

/*on click new theme */
newButtonTheme.addEventListener('click', () => {
    window.open('index.html#all-theme','_self');
})



/*get the proper theme */
var path = window. location. pathname;
var themeName = path. split("/"). pop();
themeName = themeName.split(".")[0]

/*get the proper data array for questions */
arrayName = themeName + 'Questions';
arrayName = mesQuestions[arrayName]
arrayLength = arrayName.length

/*start the first function */
window.onload = loadtheme();


function loadtheme() {
    points = 0;
    questionNumber = 0;
    const themeTitle = document.querySelector('.tme-title');
    themeTitle.textContent = dataQuizz[themeName].titreH;
    welcomeOnBoard();
}

/*bienvenue */
function welcomeOnBoard() {
    themeBox.innerHTML=`<div class="tme-questions tme-box-welcome">
    <h2 class="tme-question">Bienvenue sur notre Quiz !</h2>
    <div class="tme-reponses tme-responses-welcome">
        <ul>
            <li>
                <p>Pour chaque question, vous aurez le choix entre quatre propositions. Il n'y a qu'une seule bonne réponse par question !</p>
            </li>
            <li>
                <p>Vous avez 20 secondes par question. Faites attention à ne pas dépasser le temps imparti !</p>
            </li>

        </ul>
    </div>
    <button class="tme-btn-start">Démarrer le Quiz</button>
</div>`;
    const btnStart = document.querySelector('.tme-btn-start');
    btnStart.addEventListener('click',() => {
        displayQ(questionNumber);

    })
    
}









/*Fonction display Question : */


function displayQ(questionNumber) {

    themeBox.innerHTML=" ";
    themeBox.classList.remove('goodAnswer')
    themeBox.classList.remove('badAnswer')
    themeBox.classList.remove('tme-finalbox');
    var numeroquestion = questionNumber +1;
    var tempsTotal = 20;
    themeBox.innerHTML = `<div class="tme-box-header">
    <h2>Question <span class="purple-span">${numeroquestion}</span> sur <span class="purple-span">${arrayLength}</span></h2>
    <div class="chrono">${tempsTotal}</div>
</div>
<div class="tme-questions">
    <h2 class="tme-question">${arrayName[questionNumber].question}</h2>
    <div class="tme-reponses">
        <ul>
            <li><input type="radio" id="a" value="${arrayName[questionNumber].a}" name="answer">
                <label for="a">${arrayName[questionNumber].a}</label></li>
            <li><input type="radio" id="b" value="${arrayName[questionNumber].b}" name="answer">
                <label for="b">${arrayName[questionNumber].b}</label></li>
            <li><input type="radio" id="c" value="${arrayName[questionNumber].c}" name="answer">
                <label for="c">${arrayName[questionNumber].c}</label></li>
            <li><input type="radio" id="d" value="${arrayName[questionNumber].d}" name="answer">
                <label for="d">${arrayName[questionNumber].d}</label></li>

        </ul>
    </div>
    <span class="spanwarning">Vous devez sélectionner une réponse !</span>
    <button onclick="validateFctn()" class="tme-btn-validate">Valider la réponse</button>
</div>`
    chrono(tempsTotal)
    const BtnValidate = document.querySelector('.tme-btn-validate');

}





/*Function chrono */

function chrono(tempsTotal) {
        intervalId = window.setInterval(function(){
        const chronoEl = document.querySelector('.chrono');
        tempsTotal --;
        if(tempsTotal > 5) {
            chronoEl.textContent = tempsTotal;
        }
        else if( tempsTotal > 0) {
            chronoEl.textContent = tempsTotal;
            chronoEl.classList.add('chronoWarning')
        }
        else {
            chronoEl.classList.remove('chronoWarning')
            clearInterval(intervalId);
            themeBox.innerHTML = `<div class="chrono-timeout">
            <h1>Votre temps est écoulé ! Pas de points pour vous sur cette question...</h1>
        </div>`
            setTimeout(badAnswer,2000)
            
        }

        

      }, 1000); 
    
}


/*validate function */
function validateFctn() {
    if ($('input[name=answer]:checked').length > 0) {
        //check good ou pas
        clearInterval(intervalId)
        var reponseChoisi = $('input[name="answer"]:checked').val();
        var bonneReponse = arrayName[questionNumber].correct;
        if(reponseChoisi == bonneReponse) {
            goodAnswer();
        } else {
            badAnswer();
        }
        
    } else {
    const spanWarning = document.querySelector('.spanwarning');
    spanWarning.classList.add('spanwactive')
    spanWarning.classList.add('spanwactiveAnim')
    setTimeout(reloadAnim,900)
    function reloadAnim(){
        spanWarning.classList.remove('spanwactiveAnim')
    }
    }
    
}



/*Good et bad answer display */
function goodAnswer() {
    themeBox.innerHTML="";
    themeBox.innerHTML = `<h2 class="tme-correct">Bonne réponse ! &#128522</h2>
    <div class="tme-questions">
        <h2 class="tme-question">La bonne réponse était : ${arrayName[questionNumber].correct}.</h2>
        <p class="tme-correct-text">${arrayName[questionNumber].texteAnswer}</p>
        <button class="tme-btn-nextQ">Prochaine question</button>
    </div>`
    themeBox.classList.add('goodAnswer')
    points ++;
    questionNumber ++;
    const BtnNext = document.querySelector('.tme-btn-nextQ');
    BtnNext.addEventListener('click', () => {
        checkQ(questionNumber)
    })
    if( questionNumber == arrayLength) {
        BtnNext.textContent ="Voir les résultats"
    }
}



function badAnswer() {
    themeBox.innerHTML="";
    themeBox.innerHTML = `<h2 class="tme-correct">Mauvaise réponse ! &#128533</h2>
    <div class="tme-questions">
        <h2 class="tme-question">La bonne réponse était : ${arrayName[questionNumber].correct}.</h2>
        <p class="tme-correct-text">${arrayName[questionNumber].texteAnswer}</p>
        <button class="tme-btn-nextQ">Prochaine question</button>
    </div>`
    themeBox.classList.add('badAnswer')
    questionNumber++;
    const BtnNext = document.querySelector('.tme-btn-nextQ');
    BtnNext.addEventListener('click', () => {
        checkQ(questionNumber)
    })
    if( questionNumber == arrayLength) {
        BtnNext.textContent ="Voir les résultats"
    }
    
}


/*check pour final - final */


function checkQ(questionNumber) {
    if ( questionNumber == arrayLength) {
        displayFinal();
    } else {
        displayQ(questionNumber);
    }
}

function displayFinal() {
    themeBox.innerHTML="";
    themeBox.innerHTML= ` <h2 class="tme-finalmessage tme-finalmessage1"></h2>
    <h2 class="tme-finalmessage tme-finalmessage2"></h2>
    <div class="tme-finalimage"></div>`
    themeBox.classList.add('tme-finalbox');

    //conditions : 
    const finalMessage1 = document.querySelector('.tme-finalmessage1');
    const finalMessage2 = document.querySelector('.tme-finalmessage2');
    const bgfinal = document.querySelector('.tme-finalimage');
    if( points == arrayLength) {
        var urlbg = dataQuizz[themeName].bgPerfect;
        bgfinal.style.background = 'url('+urlbg+')';
        bgfinal.style.backgroundSize = "cover";
        bgfinal.style.backgroundPosition = "center";
        bgfinal.style.backgroundRepeat = "no-repeat"



        finalMessage2.innerHTML = generalData['finalmessage2'].scorePerfect;
        var finalmess = generalData['finalmessage1'].scorePerfect;
        finalMessage1.innerHTML = `${finalmess} <span class="purple-span">${points}/${arrayLength}.</span>`
    } else if ( points > 6) {
        var urlbg = dataQuizz[themeName].bgGood;
       bgfinal.style.background = 'url('+urlbg+')';
       bgfinal.style.backgroundSize = "cover";
       bgfinal.style.backgroundPosition = "center";
       bgfinal.style.backgroundRepeat = "no-repeat"


        finalMessage2.innerHTML = generalData['finalmessage2'].scoreGood;
       var finalmess = generalData['finalmessage1'].scoreGood;
        finalMessage1.innerHTML = `${finalmess} <span class="purple-span">${points}/${arrayLength}.</span>`
    } else if ( points > 4) {
        var urlbg = dataQuizz[themeName].bgMedium;
        bgfinal.style.background = 'url('+urlbg+')';
        bgfinal.style.backgroundSize = "cover";
        bgfinal.style.backgroundPosition = "center";
        bgfinal.style.backgroundRepeat = "no-repeat"


        finalMessage2.innerHTML = generalData['finalmessage2'].scoreMedium;
       var finalmess = generalData['finalmessage1'].scoreMedium;
        finalMessage1.innerHTML = `${finalmess} <span class="purple-span">${points}/${arrayLength}.</span>`
    } else {
        var urlbg = dataQuizz[themeName].bgBad;
        bgfinal.style.background = 'url('+urlbg+')';
        bgfinal.style.backgroundSize = "cover";
        bgfinal.style.backgroundPosition = "center";
        bgfinal.style.backgroundRepeat = "no-repeat"


        finalMessage2.innerHTML = generalData['finalmessage2'].scoreBad;
        var finalmess = generalData['finalmessage1'].scoreBad;
        finalMessage1.innerHTML = `${finalmess} <span class="purple-span">${points}/${arrayLength}.</span>`
    }
    newButtonTheme.classList.add('pulse')
}

