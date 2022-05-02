const newButtonTheme = document.querySelector('.tme-btn-new');

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
loadtheme();


function loadtheme() {
    compteur = 0;
    questionNumber = 0;
    displayQ(questionNumber)
    const themeTitle = document.querySelector('.tme-title');
    themeTitle.textContent = dataQuizz[themeName].titreH;
}

function displayQ(questionNumber) {
    console.log(arrayName[questionNumber])
}