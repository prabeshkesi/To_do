function newTask(){

    // Declaring variables
    var inputValue = document.getElementById("addTask").value;
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    
    
    li.appendChild(t);
    if(inputValue === ''){
    } else {
    document.getElementById("myTask").appendChild(li);
    }
    document.getElementById("addTask").value="";
    
    
    
    }