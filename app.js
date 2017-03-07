var ul = document.getElementById('list'),
    removeAll = document.getElementById('removeAll'),
    add = document.getElementById('add');

add.onclick = function(){
  addLi(ul);
};

function addLi(ul){
  var inputText = document.getElementById('text').value,
      newli = document.createElement('li'),
      textNode = document.createTextNode(inputText + ' '),
      removeButton = document.createElement('button');
  document.getElementById('text').value = '';

  if (inputText.split(' ').join('').length === 0){
    alert('Input is empty');
    return false;
  }

  removeButton.className = 'removeMe';
  removeButton.innerHTML = ' DONE';
  removeButton.setAttribute('onclick', 'removeMe(this);');

  newli.appendChild(textNode);
  newli.appendChild(removeButton);

  ul.appendChild(newli);
}

function removeMe(item){
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
  ul.innerHTML = '';
};
