const code = [38, 38,40,40,37,39,37,39,66,65];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown',
    huzzah);
  let index = 0;
    let key = parseInt(e.detail || e.which);
    console.log(key);
    if(key === code[index]) {
      index++;
      if(index === code.length) {
        alert("Huzzah");
        index = 0;
      }
    }
  }
}
