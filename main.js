// CLASS,ID,TAG
let diamond = document.querySelector('#diamond');
let ok = document.querySelector('.ok');
let p = document.querySelector('.p');
let text = document.querySelector('.s');

//sa LIST char
let id = document.querySelector('#id');
let dias = document.querySelector('#dias');

//Href
let a = document.querySelector('#a');

function myID(){
  id.innerHTML = text.value;
}
function myDIAS(){
  if(diamond.value > 6000){
    dias.innerHTML = ''
  }
  dias.innerHTML = `<i class="fa-solid fa-gem"> ${diamond.value}`;
}
function myTag() {
  a.href = 'https://beeg.com'
}
ok.addEventListener('click', () => {
  if(diamond.value > 6000){
    dias.innerHTML = ' ';
    diamond.value = '';
    diamond.style.fontSize = '15px';
    diamond.style.top = '-2px';
    diamond.placeholder = 'maximum is 6000';
  }else if (text.value == '' && diamond.value == '') {
    alert('Add your ID & add the diamond you want to get')
  }
  else if(text.value == ''){
    alert('ID is no value')
  }else if(diamond.value == ''){
    alert('DIAMOND is no value')
  }else{
    myTag()
  }
  
})