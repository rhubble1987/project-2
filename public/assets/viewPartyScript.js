var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

let urlArray = window.location.pathname.split("/");
let viewId = urlArray[urlArray.length-1];

var socket = io({
    query: {
        room: viewId
    }
});


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);

        $.ajax({
            url: "/api/chats",
            method:"POST",
            data: {
                message: input.value,
                viewId: viewId
            }
        });

        input.value = '';
       
    }

});


socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

/**
 * main
 */

