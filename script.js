let textArea = document.getElementById("text");
let saveButton = document.getElementById("save");
let loadButton = document.getElementById("load");
let noteName = document.getElementById("name");

file = "default";

saveButton.addEventListener("click", () => {
    let saved = textArea.value;
    localStorage.setItem(file, saved);
    console.log(`saved text ${file}`);
});

loadButton.addEventListener("click", () => {
    textArea.value = localStorage.getItem(file);
    console.log(`loaded text ${file}`);
});

noteName.addEventListener("change", () => {
    file = noteName.value;
})