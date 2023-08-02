const inputEl = document.querySelector(".input");
const wordEl = document.querySelector(".word");
const meaningEl = document.querySelector(".meaning-container");
const titleEl = document.querySelector(".title");
const meaningElement = document.querySelector(".meaning");
const audioEl = document.querySelector("#audio")

 async function fetchAPI(word){

    try {
        wordEl.style.display = "block";
        meaningEl.style.display = "none";
        wordEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
 const result = await fetch(url).then((response) => response.json());
 wordEl.style.display = "none"
 meaningEl.style.display = "block";
 titleEl.innerText = result[0].word;
 meaningElement.innerText = result[0].meanings[0].definitions[0].definitions;
 audioEl.src = result[0].phonetics[0].audio;
    } catch (error) {
    
    }
 
}

inputEl.addEventListener("keyup", (e)=>{
    
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})