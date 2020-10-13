/// <reference path="../typings/globals/jquery/index.d.ts" />
const root = document.getElementById('root');
const title = document.createElement('h1');
title.append(document.createTextNode('To Do'));
title.classList.add('h1');
const label = document.createElement('label');
const inputItem = document.createElement('input');
inputItem.setAttribute('type', 'text');
inputItem.setAttribute('placeholder', 'new item');
inputItem.setAttribute('autofocus', 'true');
label.append(document.createTextNode('Add new item: '), inputItem);
const addButton = document.createElement('button');
addButton.append(document.createTextNode('Add item'));
const todoList = document.createElement('ol');
root.append(title, label, addButton, todoList);
addButton.onclick = function () {
    const text = inputItem.value.trim();
    if (text) {
        const li = document.createElement('li');
        const delButton = document.createElement('button');
        delButton.append(document.createTextNode('X'));
        delButton.classList.add('del');
        delButton.onclick = function (event) {
            // todoList.removeChild(event.target.parentElement);
            event.target.parentElement.remove();
        }
        li.append(document.createTextNode(text), delButton);
        todoList.append(li);
    }
    inputItem.value = '';
}

inputItem.onkeyup = () => {
    inputItem.value = inputItem.value.toUpperCase();
}

inputItem.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});