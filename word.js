 async function getWord(){
       try{
           // we are using the random word api to fetch words with length of 3
           const wordFetched = await fetch(`https://random-word-api.vercel.app/api?words=1&length=3`);
           const jsonWordData = await wordFetched.json();
           const word = jsonWordData[0];


           // fetch definition from dictionary api
           const defFetched = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
           const defData = await defFetched.json();


           let definition = "Definition Not Found.";
           try {
               definition = defData[0].meanings[0].definitions[0].definition;
           } catch {
               definition = "Definition not found.";
           }
           document.getElementById("word").textContent = word.toUpperCase();
           document.getElementById("definition").textContent = definition;
       } catch (error){
           console.log(error);
           document.getElementById("word").textContent = "Oops! There's an error.";
       }
   }
   getWord();