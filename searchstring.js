//Load book from disk
function loadBook(filename, displayName) {
    let currentBook = "";
    let url = "books/" + filename;

    //reset the UI
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById('searchstat').innerHTML = "";
    document.getElementById('keyword').value = "";

    //create a server request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true );
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            currentBook = xhr.responseText;

            //remove line breaks and stuff
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

            document.getElementById('fileContent').innerHTML = currentBook;

            var elmnt = document.getElementById('fileContent');
            elmnt.scrollTop = 0;
        }
    };
}

function getDocStats(fileContent) {
    var docLength = document.getElementById("docLength");
    var wordCount = document.getElementById("wordCount");
    var charCount = document.getElementById('charCount');

    let text = fileContent.toLowerCase();
    let wordArray = text.match(/\b\S+\b/g); //returns an array of words if there is a space on both sides.
    let wordDictionary = {};

    //Count every word in the word array
    for (let word in wordArray) {
        let wordValue = wordArray[word];
        if (wordDictionary[wordValue] > 0) {
            wordDictionary[wordValue] += 1;
        }
        else {
            wordDictionary[wordValue] = 1; // this part is mainly for the first time it find the word.
        }
    }
}

//function that sorts the most and least used words

function sortProperties(obj) {
    //first convert the object to an array
    let rtnArray = Object.defineProperties(obj);

    //sort the array
    
}