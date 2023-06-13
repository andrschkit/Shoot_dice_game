//Модальное окно с правилами
const modalWindow=document.querySelector('.modal_rules');

const overlay=document.querySelector('.overlay');
const btnClose=document.querySelector('.close_modal_window');
const btnModal=document.querySelector('.btn_show_rules');

btnModal.addEventListener('click', function()
{
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const addClass= function()
{
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnClose.addEventListener('click', addClass);

overlay.addEventListener('click', addClass);

document.addEventListener('keydown', function(e){
  console.log(e.key)
  if(e.key==='Escape' && (!modalWindow.classList.contains('hidden')))
  {
    addClass();
  }
});
//логика игрушки