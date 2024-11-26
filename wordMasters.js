const letters = document.querySelectorAll('.scoreboard-letter')
const loadingDiv = document.querySelector('.info-bar')
const answerLength = 5

async function init() {
    let currentGuess = '';
    let currentRow = 0;

    // Fetch word of the day
    const res = await fetch("https://words.dev-apis.com/word-of-the-day")
    const respObj = await res.json()
    const word = respObj.word.toUpperCase()

    console.log(word)

    function addLetter(letter) {
        if (currentGuess.length < answerLength) {
            //add letter to the end
            currentGuess += letter
        } else {
            // replace the last letter
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter
        }

        letters[currentRow * answerLength + currentGuess.length - 1].innerText = letter
        // letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText = letter;
    }

    async function commit() {
        if (currentGuess != answerLength) {
            //do nothing
            return
        }

        // TO DO validate the word

        // TODO do all the marking as "correct", "close" or "wrong"

        // TODO did they win or lose? 

        currentRow++;
        currentGuess = '';
    }

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1)
        letters[answerLength * currentRow + currentGuess.length].innerText = ""
    }



    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key
        console.log(action)

        if (action === 'Enter') {
            commit()
        } else if (action == 'Backspace') {
            backspace()
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase())
        } else {
            //do nothing
        }
    })
}


function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
}

function setLoading(isLoading) {
    loadingDiv.classList.toggle('hidden', !isLoading);
}

init()



// getting started javascript primer task 1

let favoriteBooks = [];

function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName)
    }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function printFavoriteBooks() {
    console.log(
        `Favorite books: ${favoriteBooks.length}`
    )

    for (let favoriteBook of favoriteBooks) {
        console.log(favoriteBook)
    }
}

printFavoriteBooks()
