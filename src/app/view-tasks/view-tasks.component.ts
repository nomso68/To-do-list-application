import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.scss'
})
export class ViewTasksComponent implements OnInit {
  tasks: string[] = [];
  ngOnInit() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }
}
