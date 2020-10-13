/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function(){
    const title = $('<h1></h1>').text('To Do').addClass('h1');
    const label = $('<label></label>').text('Add new item: ');
    const input = $("<input></input>").attr({
        'type': 'text',
        'placeholder': 'new item',
        'autofocus': 'true'
    });
    const addButton = $('<button></button>').text('Add item');
    const todoList = $('<ol></ol>');
    $("body").append(title, label.append(input), addButton, todoList);


    input.on('keyup', function () { 
        $(this).val($(this).val().toUpperCase());
    });
    
    addButton.on('click', function(){
        const li = $('<li></li>').text(input.val());
        const delButton = $('<button></button>').text('X').addClass('del');
        delButton.on('click', function(){
            $(this).parent().toggle();
        });
        todoList.append(li.append(delButton));
        input.val('');
    });

    input.keyup(function(e){
        if(e.keyCode == 13) {
            addButton.trigger("click");
        }
    });
  }); 