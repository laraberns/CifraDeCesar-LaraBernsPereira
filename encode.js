const paragraphAnswer = document.getElementById('idParagraphAnswer')
const textArea = document.getElementById('idTextArea')
const buttonSubmit = document.getElementById('idButtonSubmit')
const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
const alphabetArray = alphabet.split(",")
const cipher = document.getElementById('idCipher')
const checkboxEncode = document.getElementById('idEncode')
const checkboxDecode = document.getElementById('idDecode')

var textAreaArray
var textAreaArrayPosition = []
var textAreaArrayPositionEncodedDecoded = []
var textEncodedArray = []
var textEncoded

function preventDefault(event) {
    event.preventDefault()

    // encode() if encode is checked and its a number between 1 and 9
    if (checkboxEncode.checked && (cipher.value > 0 && cipher.value < 10)) {
        encode()
    }

    // encode() if encode is checked and transform letter into number
    if (checkboxEncode.checked && alphabetArray.includes((cipher.value).toUpperCase())) {
        transformLetterToNumberCipher()
        encode()
    }

    // decode() if decode is checked and its a number between 1 and 9
    if (checkboxDecode.checked && (cipher.value > 0 && cipher.value < 10)) {
        decode()
    }

    // decode() if decode is checked and its a number between 1 and 9
    if (checkboxDecode.checked && alphabetArray.includes((cipher.value).toUpperCase())) {
        transformLetterToNumberCipher()
        decode()
    }
}

// transform letter into number - Cipher
function transformLetterToNumberCipher() {
    for (let index = 0; index < alphabetArray.length; index++) {
        if ((cipher.value).toUpperCase() == alphabetArray[index])
            cipher.value = index + 1
    }
}

function encode() {
    let textAreaUpperCase = (textArea.value).toUpperCase()
    textAreaArray = textAreaUpperCase.split("")

    textAreaArray.forEach(verifyPositionOfEachLetter)

    textAreaArrayPosition.forEach(addCipherTotextAreaArrayPosition)

    textAreaArrayPositionEncodedDecoded.forEach(encodingArrayPositionEncoded)

    textEncoded = textEncodedArray.join("")

    paragraphAnswer.innerText = textEncoded

    cleaningFields()

}

function decode() {
    let textAreaUpperCase = (textArea.value).toUpperCase()
    textAreaArray = textAreaUpperCase.split("")

    textAreaArray.forEach(verifyPositionOfEachLetter)

    textAreaArrayPosition.forEach(removeCipherTotextAreaArrayPosition)

    textAreaArrayPositionEncodedDecoded.forEach(encodingArrayPositionEncoded)

    textEncoded = textEncodedArray.join("")

    paragraphAnswer.innerText = textEncoded

    cleaningFields()

}

// verifying position of each textarea character and saving the position in textAreaArrayPosition
function verifyPositionOfEachLetter(item) {
    for (let index = 0; index < alphabetArray.length; index++) {
        if (item == alphabetArray[index]) {
            textAreaArrayPosition.push(index)
        }
    }

    // verifying if item is not a letter and saving the item in textAreaArrayPosition
    if (alphabetArray.includes(item) == false) {
        textAreaArrayPosition.push(item)
    }
}

// adding cipher value to textAreaArrayPositionEncodedDecoded
function addCipherTotextAreaArrayPosition(item) {
    if (typeof item == "number" && item + Number(cipher.value) < 26) {
        textAreaArrayPositionEncodedDecoded.push(item + Number(cipher.value))
    } else {
        if (typeof item == "number" && item + Number(cipher.value) >= 26) {
            textAreaArrayPositionEncodedDecoded.push((item - 26) + Number(cipher.value))
        }
        else {
            textAreaArrayPositionEncodedDecoded.push(item)
        }
    }
}

// encoding arrayPositionEncoded into textEncodedArray
function encodingArrayPositionEncoded(item) {

    for (let index = 0; index < alphabetArray.length; index++) {
        if (item == index && typeof item == "number") {
            textEncodedArray.push(alphabetArray[index])
        }
    }

    if (typeof item == "string") {
        textEncodedArray.push(item)
    }
}

// adding cipher value to textAreaArrayPositionEncodedDecoded
function removeCipherTotextAreaArrayPosition(item) {
    if (typeof item == "number" && item - Number(cipher.value) >= 0) {
        textAreaArrayPositionEncodedDecoded.push(item - Number(cipher.value))
    } else {
        if (typeof item == "number" && item - Number(cipher.value) < 0) {
            textAreaArrayPositionEncodedDecoded.push((item + 26) - Number(cipher.value))
        }
        else {
            textAreaArrayPositionEncodedDecoded.push(item)
        }
    }
}

// cleaning fields
function cleaningFields() {
    textArea.value = ''
    textAreaArray = []
    textAreaArrayPosition = []
    textAreaArrayPositionEncodedDecoded = []
    textEncodedArray = []
    textEncoded = ''
    cipher.value = ''
}


