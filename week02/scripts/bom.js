// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const ul = document.querySelector('list');
// const li = document.createElement('li');
// const deletebuttom = document.createElement('button');
// li.textContent = input.value;
// deletebuttom.textContent = '❌'
// li.append('delectbutton');
// li.append('li');

button.addEventListener('click', function(){

    if (input.value.trim() !=='') {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const ul = document.querySelector('list');
    const li = document.createElement('li');
    const deletebuttom = document.createElement('button');
    li.textContent = input.value;
    deletebuttom.textContent = '❌'
    li.append('delectbutton');
    li.append('li');
    }
    list.removechild(li);
    input.focus();
    input.value = '';
    
})