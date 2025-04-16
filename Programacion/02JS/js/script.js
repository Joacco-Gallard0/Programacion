document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AddTask").addEventListener("click", () => {
        let taskInput = document.getElementById("taskInput");
        if (!taskInput.value.trim()) return;
        
        let li = document.createElement("li");
        li.innerHTML = taskInput.value + ' <button onclick="this.parentElement.remove()">Eliminar</button>';
        
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    });
});



