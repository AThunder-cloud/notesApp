import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';



@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TodosComponent,
    AddTodoComponent,
    AddNoteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
