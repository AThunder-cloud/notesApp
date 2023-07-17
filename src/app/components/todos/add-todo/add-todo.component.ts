import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modules';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  inputTask?:string;
  
  @Output() todoEmitter:EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    if(this.inputTask === undefined){
      alert("todo was empty");
    }else{
      const todo:Todo ={
        id:0,
        task: this.inputTask,
        isActive:true
      }
      this.todoEmitter.emit(todo);
      this.inputTask = '';
    }

  }
}
