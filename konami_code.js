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
  document.body.addEventListener('keydown',
    huzzah());
  let index = 0;
  function huzzah(e) {
    
    let key = (e.key);
    if(key === code[index]) {
      index++;
      if(index === code.length) {
        alert("Huzzah");
        index = 0;
      }
    }
  }
}
