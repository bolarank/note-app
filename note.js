const NoteApp= document.getElementById("note")
const nnn= document.getElementById("nnn")
const gg= document.getElementById("gg")



function AddTask(){
    if (NoteApp.value===""){
        alert("Write a note")
    }
    else{
        let create= document.createElement("p");
        create.classList.add("note-card") 
        create.innerHTML=NoteApp.value;
        nnn.appendChild(create);
        NoteApp.value="";
    }
}