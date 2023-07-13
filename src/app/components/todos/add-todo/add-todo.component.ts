import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modules';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  task:string='';
  
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    if(this.task === undefined){
      alert("todo was empty");
    }else{
      const todo:Todo ={
        id:0,
        task: this.task,
        isActive:true
      }
      this.todoAdd.emit(todo);
    }

  }
}
