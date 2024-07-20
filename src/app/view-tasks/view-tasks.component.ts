import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from '../task-component/task.component';
TaskComponent

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.scss'
})
export class ViewTasksComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  tasks: any[] = [];
  completedTasks!: boolean;
  ngOnInit() {
    this.displayTasks();
  }

  displayTasks() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
    this.completedTasks = this.tasks.some(task => task.completed);
  }

  markAsCompleted(task: string) {
    const index = this.tasks.indexOf(task);
    this.tasks[index].completed = true;
    this.tasks.push(this.tasks[index]);
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displayTasks();
  }

  openDialog(taskName?: string) {
    var dialogRef = this.dialog.open(TaskComponent, {
      width: '50%',
      height: '175px',
      data: taskName
    });

    dialogRef.afterClosed().subscribe(result => {
      this.displayTasks();
    });
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    this.displayTasks();
  }

  clearAll() {
    this.tasks = [];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displayTasks();
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displayTasks();
  }
}
