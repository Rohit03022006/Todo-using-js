
        let btn = document.getElementById("addTask");
        let ul = document.getElementById("ul1");
        let userInput = document.getElementById("taskInput");
        let taskCounter = document.getElementById("taskCounter");

        function updateTaskCounter() {
            let count = ul.children.length;
            taskCounter.textContent = count + " " + (count === 1 ? "task" : "tasks");
        }

        btn.addEventListener("click", function(){
            if(userInput.value.trim() === "") {
                alert("Please enter a task!");
                return;
            }
            
            let task = document.createElement("li");
            
            let taskText = document.createElement("span");
            taskText.className = "task-text";
            taskText.textContent = userInput.value;
            
            let deleteButton = document.createElement("button");
            deleteButton.className = "button";
            deleteButton.textContent = "Delete";
            
            task.appendChild(taskText);
            task.appendChild(deleteButton);
            ul.appendChild(task);
            userInput.value = "";
            
            updateTaskCounter();
        });
        
        ul.addEventListener("click", function(event) {
           if (event.target.nodeName == "BUTTON") {
            let taskItem = event.target.parentElement;
            taskItem.remove();
            updateTaskCounter();
           }
        });

        updateTaskCounter();
