import '../style.css'

const buttons = document.querySelector<HTMLDivElement>(".letter-btns");
const outputField = document.querySelector<HTMLDivElement>(".ausgabe");
// const outputTrys = document.querySelector<HTMLDivElement>(".versuche");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖ";

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


  // Erzeugen eines zufälligen Wortes aus dem Array "words"
  const randomNumber = Math.floor(Math.random()*words.length);
  const randomWord: string = words[randomNumber].toUpperCase();

 console.log(randomWord);
 

 // string -> "Gedankenkarussel" gib mir _

// funktion die die Wortlänge vom "randomWord" nimmt und als platzhalter 
  //  ausgibt 


 function ausgabeOne(){

    // Erzeugt dynamisches Ausgabefeld
    for (const buchstabe of randomWord) {
      
    if(outputField){
        outputField.innerHTML += `<p class="item-${buchstabe.toUpperCase()}">__</p>`;
    }

 }

// Buttons erzeugt mit den Buchstaben
for (const buchstabe of alphabet) {
  
    if (buttons) {
  
      
  
       buttons.innerHTML += `<button class="letter-btn" id="${buchstabe}">${buchstabe}</button>`;
  
    }
  }



  
    const allLetterBtns = document.querySelectorAll(".letter-btn") as NodeListOf<HTMLButtonElement>;
   
    allLetterBtns.forEach( (letterBtn) =>{
      
        
        letterBtn.addEventListener('click',()=>{

            
            let knopf: string = letterBtn.id.toUpperCase();;
         
            const zugriff = document.querySelector(`.item-${knopf}`)!;
            if(randomWord.includes(knopf)){
               
               letterBtn.style.backgroundColor="green"

    //            const guessedLetters: string[] = Array(randomWord.length).fill("__");
    //            let letterFound = false;
                




    //                // Überprüfe jeden Buchstaben im zufälligen Wort
    //   for (let i = 0; i < randomWord.length; i++) {
    //     if (randomWord[i] === knopf) {
    //       guessedLetters[i] = randomWord[i]; // Aktualisiere das Array mit dem erratenen Buchstaben
    //       letterFound = true;
    //     }
    //   }

    //   // Aktualisiere das Ausgabefeld
    //   if (zugriff) {
    //     zugriff.innerHTML = guessedLetters
    //       .map((knopf) => `<p>${knopf}</p>`)
    //       .join("");
    //   }











                let count =   randomWord.match(knopf)?.length!;

                console.log(count);
                
                
            
               zugriff.innerHTML = knopf;
              
    
                
            }else{
             letterBtn.style.backgroundColor="red"
                
            }
            

        });
            

        } )




     
    }

 ausgabeOne();



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








