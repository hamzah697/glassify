console.clear();
console.log("Script loaded once");

document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");
  console.log("cards found:", cards.length);

  cards.forEach((card, index) => {
    let count = 0;
    console.log("Initial count for card", index + 1, ":", count);

    const plus = card.querySelector(".plus");
    const display = card.querySelector(".counter");
    const minus = card.querySelector(".minus");

    if (!plus || !minus || !display) {
      console.log("Missing elements in card", index + 1);
      return;
    }

    
    // display.textContent = count;

   
    plus.addEventListener("click", (e) => {
      e.stopPropagation();
      count++;
      display.textContent = count;
    });

   
    minus.addEventListener("click", (e) => {
      e.stopPropagation();
      if (count > 0) {
        count--;
        display.textContent = count;
      } else {
        alert("Negative numbers are invalid");
      }
 });
});
});