let input = document.querySelector("#input");
let add = document.querySelector(".add");
let todolist = document.querySelector(".todolist");
// let deletes = document.querySelector(".delete");
// let listItem = document.querySelector(".todolist li")



add.addEventListener('click',function(event){
    event.preventDefault();
    if(input.value == ''){
        alert(`plz provide input!`)
    }else{
        let li = document.createElement('li');
        let button = document.createElement('button');
        let icon = document.createElement('i');

        icon.classList = "fas fa-times-circle"
        button.appendChild(icon);
        li.appendChild(button);
        li.appendChild(document.createTextNode(input.value))
        todolist.appendChild(li)
        input.value =''

        button.onclick = function(){
            this.parentNode.remove()
        }
    }
})



