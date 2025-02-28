import '../style.css'

const buttons = document.querySelector<HTMLDivElement>(".letter-btns")!;
const outputField = document.querySelector<HTMLDivElement>(".ausgabe");
const outputTrys = document.querySelector<HTMLDivElement>(".versuche")!;
const firework = document.querySelectorAll<HTMLDivElement>(".firework")!;
const reset = document.querySelector<HTMLButtonElement>(".reset")!;
const wrapper = document.querySelector<HTMLDivElement>(".wrapper")!;



const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖ";
let count: number = 10;

const words = [
    "Abendmahl",
     "Feiertagsbrücke",
      "Erklärungsdruck",
       "Feingefühl", "Fremdscham", 
    "Nestwärme", "Stilbruch", "Innerer Schweinehund", "Kopfkino-Trailer", "Frustspeck", 
    "Geistesblitz", "Lebenspanik", "Verabredung", "Verschlimmbesserung", "Spannungsvorfreude", 
    "Weltenleid", "Zeitgefühl", "Entscheidungsdruck", "Tagträumerei", "Alltagsflucht", 
    "Sehnsuchtsmoment", "Gedankenkarussell", "Nostalgieblitz", "Schlafmangelwahnsinn", 
    "Glücksmoment", "Kreativchaos", "Herzschmerz", "Abenteuerlust", "Ruhepol", "Hoffnungsschimmer"
  ];

  const fullWord: string[] = [];
  // Erzeugen eines zufälligen Wortes aus dem Array "words"
  const randomNumber = Math.floor(Math.random()*words.length);
  const randomWord: string = words[randomNumber].toUpperCase();
let wordlength: number = randomWord.length; 


 // Funktion zum Erstellen der Platzhalter
function createOutputFields() {
    outputField!.innerHTML = "";
    for (let i = 0; i < randomWord.length; i++) {
        const buchstabe = randomWord[i];
        if (buchstabe === " ") {
            outputField!.innerHTML += `<p class="space"> </p>`;  // Falls Wort Leerzeichen enthält
        } else {
            outputField!.innerHTML += `<p class="item-${i}">__</p>`;
        }
       
    }
}

// Funktion zum Erstellen der Buchstaben-Buttons
function createLetterButtons() {
    buttons!.innerHTML = "";
    for (const buchstabe of alphabet) {
        buttons!.innerHTML += `<button class="letter-btn" id="${buchstabe}">${buchstabe}</button>`;
    }

    reset.addEventListener('click', ()=> history.go(0));
}

// Event-Listener für Buchstaben-Buttons hinzufügen
function setupButtonListeners() {
    const allLetterBtns = document.querySelectorAll<HTMLButtonElement>(".letter-btn");
    outputTrys.innerHTML= count + " Versuche";
    allLetterBtns.forEach(letterBtn => {
        letterBtn.addEventListener('click', () => {
            let knopf: string = letterBtn.id.toUpperCase();
            
            if (randomWord.includes(knopf)) {
                letterBtn.style.backgroundColor = "green";
               
                // Alle Vorkommen finden und ersetzen
                for (let i = 0; i < randomWord.length; i++) {
                    if (randomWord[i] === knopf) {
                        const element = document.querySelector(`.item-${i}`);
                        if (element) {
                            element.innerHTML = knopf;
                            fullWord.push(knopf);
                            wordlength--;
                        }
                    }
                }
                    
                    
                 if(wordlength <= 0){
                    
                   for(const red of allLetterBtns){
                        
                        red.style.visibility = "hidden";
                       
                   }

                  for(let e of firework) e.style.display ="inline";
                    
                    
                 }
                
                   
                    
            } else {
                letterBtn.style.backgroundColor = "red";
                count--;
                
                outputTrys.innerHTML= count + " Versuche";
            

                if(count <= 0){
                  endSequence();
                }
                
            }
        });
    });
}



// Initialisierung
export function startGame() {
    
    createOutputFields();
    createLetterButtons();
    setupButtonListeners();

  


}

startGame();

console.log();



//  const root = document.getElementById('app')
//  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//  const words = ['hello', 'world', 'typescript']
//  let actualRound = 0
//  const maxRounds = 12
//  let word = ''
//  const clickedLetters: String[] = []
 
//  const resultDiv = document.createElement('div')
 
//  for (const letter of alphabet) {
//    const button = document.createElement('button')
//    button.textContent = letter
//    button.dataset.letter = letter
//    button.addEventListener('click', clickHandler)
//    root!.appendChild(button)
//  }
 
//  root!.appendChild(resultDiv)
 
//  function getRandomWord() {
//    return words[Math.floor(Math.random() * words.length)]
//  }
 
//  function newGame() {
//    word = getRandomWord()
//    actualRound = 0
//    clickedLetters.length = 0
 
//    for (const _ of word) {
//      const letterDiv = document.createElement('div')
//      letterDiv.style.height = '30px'
//      letterDiv.style.width = '30px'
//      letterDiv.style.borderBottom = '1px solid black'
//      letterDiv.style.display = 'inline-block'
//      letterDiv.style.marginRight = '5px'
//      resultDiv.appendChild(letterDiv)
//    }
//  }
 
//  function clickHandler(event: Event) {
//    const button = event.target as HTMLButtonElement
//    const letter = String(button.dataset.letter)
//    clickedLetters.push(letter)
//    button.disabled = true
//    checkRound()
//  }
//  function checkRound() {
//    const letters = resultDiv.children
//    for (let i = 0; i < letters.length; i++) {
//      const letter = word[i].toLowerCase()
//      if (checkIfLetterIsInClickedLetters(letter)) {
//        const letterDiv = letters[i] as HTMLDivElement
//        letterDiv.textContent = word[i]
//      }
//    }
//  }
 
//  function checkIfLetterIsInClickedLetters(letter: string) {
//    return clickedLetters.includes(letter)
//  }
 
 
 
//  newGame()







function endSequence(){

    
    buttons.style.display = "none";
    wrapper.style.display = "none";
    const videoende=  document.getElementById("myVideo") as HTMLVideoElement;
                  videoende.setAttribute('src', './src/assets/videos/lost.mp4');
                  videoende.removeAttribute('muted');
                
                  videoende.load();
                 videoende.play();
                  videoende.addEventListener("ended", ()=>{
                    location.reload();
                  })
                   

}
