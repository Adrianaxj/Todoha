var todoList = [];

function insertText() {
    var textHere = document.getElementById("input").value;
    todoList.push(textHere);
    updateShowList();
}

function updateShowList(){
    var listtag = document.getElementById("todoList");
    var textHere = document.getElementById("input");
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
        var text = document.createTextNode(todoList[i]);
        
        node.appendChild(text);
        span.appendChild(checkbox);
        span.appendChild(node);
        

        textHere.value="";
        listtag.appendChild(span);
        //listtag.appendChild(checkbox);
        //listtag.appendChild(node);
    }
}

function clickAll(){
   
    for(let i = 0; i < document.getElementById("todoList").childElementCount; i++)
    {
        let node = document.getElementById("checkbox"+i).parentNode;
        node.style.display = "flex";
    }
}

function clickActive(){

    for(let i = 0; i < document.getElementById("todoList").childElementCount; i++)
    {
        if(document.getElementById("checkbox"+i).checked)
        {
            let node = document.getElementById("checkbox"+i).parentNode;
            node.style.display = "none";
        }
        else
        {
            let node = document.getElementById("checkbox"+i).parentNode;
            node.style.display = "flex";
        }
    }
}

function clickCompleted(){
    for(let i = 0; i < document.getElementById("todoList").childElementCount; i++)
    {
        let node = document.getElementById("checkbox"+i).parentNode;

        if(document.getElementById("checkbox"+i).checked)
        {
            node.style.display = "flex";
        }
        else 
        {
            node.style.display = "none";
        }
    }

}
function ClearCompleted(){
    
    for(let i = 0; i < document.getElementById("todoList").childElementCount; i++)
    {
        let node = document.getElementById("checkbox"+i);
        if(node.checked)
        {
            node.remove(node);
            
        
        } 
    }
    document.getElementById("ClearCompleted").style.visibility = "hidden";
    updateShowList();
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
    

