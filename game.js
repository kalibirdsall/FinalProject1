const items = [
   { word: "cat", img: "images/cat.png" },
   { word: "dog", img: "images/dog.png" },
   { word: "sun", img: "images/sun.jpg" },
   { word: "bat", img: "images/bat.png" },
   { word: "ant", img: "images/ant.png" }
 ];
 let currentItem;
 function pickItem() {
   currentItem = items[Math.floor(Math.random() * items.length)];
   document.getElementById("games-pic").src = currentItem.img;
   document.getElementById("answer").value = "";
   document.getElementById("feedback").textContent = "";
 }
 
 document.getElementById("check-btn").addEventListener("click", () => {
   const userAnswer = document.getElementById("answer").value.toLowerCase();
   if (!userAnswer) return;
    if (userAnswer === currentItem.word[0]) {
     document.getElementById("feedback").textContent = "✅ Correct!";
   } else {
     document.getElementById("feedback").textContent = `❌ Oops! Try again`;
   }
 });
  document.getElementById("next-btn").addEventListener("click", () => {
   pickItem();
 });
  pickItem();