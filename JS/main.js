const btn = document.getElementById('button');


btn.addEventListener('click', ()=> {

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
  .then(response => response.json())
  .then(data => {
    document.getElementById('facts').innerHTML = data.text;
    console.log(data)
  })
})
