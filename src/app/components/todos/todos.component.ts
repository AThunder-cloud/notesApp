import { Component } from '@angular/core';
import { Todo } from 'src/app/modules';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoList : Todo[] =[];
  localItems :string | null;
  colors: string[] = ['primary', 'success', 'danger', 'warning', 'info', 'secondary', 'purple', 'pink'];

  constructor(){
    this.localItems =localStorage.getItem('notes');
    if(this.localItems == null){
      this.todoList =[]
    }
    else{
      this.todoList = JSON.parse(this.localItems);
    }

    const todo:Todo = {
      id:1,
      task:'get eggs and also water the plants get eggs and also water the plants',
      isActive:true,
    }
    // this.todoList.push(todo);
    // this.todoList.push(todo);
    // this.todoList.push(todo);
    this.todoList.push(todo);

  }

  getRandomColor(index:number):string{
    const colors = [
      'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'maroon', 'navy',
      'lime', 'aqua', 'olive', 'silver', 'gray', 'indigo', 'brown', 'fuchsia', 'gold',
      'cyan', 'crimson', 'darkgreen', 'darkorange', 'darkred'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  getRandomColor2(index:number):string{
    const colors = [
      'red', 'green', 'blue', 'orange', 'purple', 'pink', 'teal', 'maroon', 'navy',
      'lime', 'aqua', 'olive', 'indigo', 'brown', 'fuchsia', 'gold','cyan', 'crimson', 'darkgreen', 'darkorange', 'darkred'  
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  

}
