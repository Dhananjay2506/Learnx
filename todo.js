const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


document.addEventListener("DOMContentLoaded", function() {
    const savedItems = JSON.parse(localStorage.getItem("toDoItems")) || [];
    savedItems.forEach(itemText => addToDo(itemText));
});

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key === "Enter") {
            const newItemText = this.value;
            addToDoAndSave(newItemText);
            this.value = "";
        }
    }
);

const addToDoAndSave = (itemText) => {
    addToDo(itemText);
    saveToLocalStorage();
};

const addToDo = (itemText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${itemText}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
            saveToLocalStorage();
        }
    );

    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove();
            saveToLocalStorage();
        }
    );

    toDoBox.appendChild(listItem);
};

function saveToLocalStorage() {
    const toDoItems = Array.from(toDoBox.children).map(item => item.textContent.trim());
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
}
