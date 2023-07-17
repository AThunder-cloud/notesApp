import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';

const routes: Routes = [
  {path:'notes', component:NotesComponent},
  {path:'notes/:note-id', component:NotesComponent},
  {path:'add-note', component:AddNoteComponent},
  {path:'todos', component:TodosComponent},
  {path:'', redirectTo:'notes',pathMatch:'full'},
  {path:'**', redirectTo:'notes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
