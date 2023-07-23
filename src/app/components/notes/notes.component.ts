import { Component, ViewChild } from '@angular/core';
import { Note } from 'src/app/modules'
import { AddNoteComponent } from './add-note/add-note.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notesList:Note[] = []
  localItems?:string | null;
  
  @ViewChild(AddNoteComponent) addNoteComponent?: AddNoteComponent;

  constructor(){
    this.localItems =localStorage.getItem('notesList');
    if(this.localItems == null){
      this.notesList =[]
    }
    else{
      this.notesList = JSON.parse(this.localItems);
    }
  }

  addNoteFucntion(){
    this.addNoteComponent?.decreaseAddNote()
  }

  getRandomColor():string{
    const colors = [
      'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'maroon', 'navy',
      'lime', 'aqua', 'olive', 'silver', 'gray', 'black', 'indigo', 'brown', 'fuchsia', 'gold',
      'cyan', 'crimson', 'darkgreen', 'darkorange', 'darkred'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  addNote(note:Note){
    note.id = this.notesList.length + 1;
    note.color = this.getRandomColor();
    this.notesList.push(note);
    localStorage.setItem("notesList", JSON.stringify(this.notesList));

  }
  deleteNote(note:Note){
    const indexOfItem= this.notesList.indexOf(note);
    this.notesList.splice(indexOfItem,1);
    localStorage.setItem("notesList", JSON.stringify(this.notesList)); 
  }
}
