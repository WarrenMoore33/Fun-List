document.addEventListener('click', (event) =>{
    console.log(event.target);
});

window.setTimeout((something) => {
    console.log(something);
  }, 3000, 'greetings everyone');