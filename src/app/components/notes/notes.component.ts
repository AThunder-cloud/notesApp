import { Component } from '@angular/core';
import { Note } from 'src/app/modules'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notesList:Note[] = []
  localItems?:string | null;


  constructor(){
    this.localItems =localStorage.getItem('notes');
    if(this.localItems == null){
      this.notesList =[]
    }
    else{
      this.notesList = JSON.parse(this.localItems);
    }
    const newNote:Note = {
        id:1,
        title:'Hello notes',
        body:'This is a notes application',
        date: new Date
      }
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
    this.notesList.push(newNote);
  }
  // getRandomColor(index: number): string {
  //   const randomIndex = Math.floor(Math.random() * this.colors.length);
  //   return `border-${this.colors[randomIndex]}`;
  // }

  getRandomColor(index:number):string{
    const colors = [
      'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'maroon', 'navy',
      'lime', 'aqua', 'olive', 'silver', 'gray', 'black', 'indigo', 'brown', 'fuchsia', 'gold',
      'cyan', 'crimson', 'darkgreen', 'darkorange', 'darkred'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
}
