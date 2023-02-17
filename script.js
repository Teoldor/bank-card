let cardInput = document.querySelector('#card')
let button = document.querySelector('.bankCard')
let bankPaySystemShow = document.querySelector('.bank')

let masterCard = '5469';
let visa = '4404';
let mir = '2202';

let temp = '';

function comparePaySystem(value) {
  switch(value){
    case masterCard:{return 'masterCard';
    break}
    case visa:{return 'visa';
    break}
    case  mir:{return 'mir';
    break}
    default :{return 'pay system unknown'}
  }
}

button.addEventListener('click', () => {
  let tempPart = temp.slice(0, 4)
  bankPaySystemShow.innerText = comparePaySystem(tempPart) 
})

cardInput.addEventListener('change', (e)=>{
  temp = e.target.value;
})