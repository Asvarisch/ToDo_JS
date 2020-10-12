const root = document.getElementById('root');
const todoList = document.createElement('ol');
root.insertAdjacentElement('afterend', todoList);
//let index = 1;
const indexArray = [];

// header line
const applNameText = document.createElement('p');
applNameText.append(document.createTextNode('To-do'));
// text
const addNewItemText = document.createTextNode('Add new Item:\n');
// input field
const input = document.createElement('input');
input.setAttribute('type', 'text');
// button
const addButton = document.createElement('addButton');
const addButtonText = document.createTextNode('Add Item: ');
addButton.append(addButtonText);
addButton.classList.add('text');
// appending dom
root.append(applNameText, addNewItemText, input, addButton);

addButton.onclick = (event) => {
    const li = document.createElement('li');
    const text = event.target.previousSibling.value;
    const content = document.createTextNode(text);
    const doneButton = document.createElement("doneButton");
    const donebuttonText = document.createTextNode("done");
    doneButton.append(donebuttonText);
    li.append(content, doneButton);
    event.target.parentElement.nextSibling.append(li);
    event.target.previousSibling.value = '';
    //index++;
}

input.onkeyup = (event) => {
    event.target.value = event.target.value.toUpperCase();
}

doneButton.onclick = (event) => {
    // console.log(event);
    todoList.removeChild(event.target.parentElement);
    
}




// function eventLogger(event) {
//     console.log(event.target, event.type);
// }