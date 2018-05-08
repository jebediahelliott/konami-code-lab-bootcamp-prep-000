const code = ["ArrowUp", "ArrowUp", "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', huzzah);
  let index = 0;
  function huzzah(KeyboardEvent) {
    let key = (KeyboardEvent.key);
    while(key === code[index]) {
      index++;
      if(index === code.length) {
        alert("Huzzah");
      }
      else {
        index = 0;
      }
    }
  }
}
