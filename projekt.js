var todoList = [];

function insertText() {
    var textHere = document.getElementById("input").value;
    todoList.push(textHere);
    updateShowList();
}

function updateShowList(){
    var listtag = document.getElementById("todoList");
    while (listtag.firstChild) {
        listtag.removeChild(listtag.firstChild);
    }
    
    for(var i = 0; i < todoList.length; i++){
        var span = document.createElement("span");
        span.classList.add('row');
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox"+i;
        var node = document.createElement("span");
        var br = document.createElement("br");
        var text = document.createTextNode(todoList[i]);
        
        node.appendChild(text);
        span.appendChild(checkbox);
        span.appendChild(node);
        
        
        listtag.appendChild(span);
        //listtag.appendChild(checkbox);
        //listtag.appendChild(node);
        listtag.appendChild(br);
    }
}

function addLabel(){
    var attribut = document.createElement("checkbox", "type");
}
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("search").click();
    }
  });
//     var list = document.querySelector("ul");
//     list.addEventListener("click", function(ev){
//         if(ev.target.tagName ==="LI") {
//             ev.target.classList.toggle("done");
//         }
//     }, false);

//     function check() {
//         document.getElementById("myCheck").checked = true;
//     }
    
//     function uncheck() {
//         document.getElementById("myCheck").checked = false;
//     }
// }
    

