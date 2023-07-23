import { Component, EventEmitter, Output} from '@angular/core';
import { Note } from 'src/app/modules';

@Component({ 
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  inputNoteTitle?:string;
  inputNoteBody?:string;
  isExpand:boolean=false;
  isHidden:boolean=true;

  @Output() noteEmitter:EventEmitter<Note> = new EventEmitter();

  increaseAddNote(){if(!this.isExpand){this.isExpand = true;this.isHidden = false;}}
  decreaseAddNote(){if(this.isExpand){this.isExpand = false;this.isHidden = true;}}

  onSubmit() {
    if (!this.inputNoteBody || !this.inputNoteBody.trim()) {
      alert("The body was empty, hence the note was not saved");
    }else if (!this.inputNoteTitle || !this.inputNoteTitle.trim()) {
      const note: Note = {
        id: 0,
        title: 'Title',
        body: this.inputNoteBody,
        date: new Date()
      };
      this.noteEmitter.emit(note);
      this.inputNoteTitle = '';
      this.inputNoteBody = '';
    } else {
      const note: Note = {
        id: 0,
        title: this.inputNoteTitle,
        body: this.inputNoteBody,
        date: new Date()
      };
      this.noteEmitter.emit(note);
      this.inputNoteTitle = '';
      this.inputNoteBody = '';
      console.log('Note was saved');
    }
  }
  
}
