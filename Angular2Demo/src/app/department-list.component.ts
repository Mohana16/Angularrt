import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'department-list',
    template: `<h1>Department List</h1>
               <ul class = "items">
               <li (click) = "onSelect(department)" *ngFor = "let department of departments">
               <span item = "badge"> {{department.id}} </span> {{department.name}}
               </li>
</ul>`,
})
export class DepartmentListComponent {
    constructor(private router: Router) { }
    departments = [
        { "id": 1, "name": "Angular" },
        { "id": 2, "name": "Node" },
        { "id": 3, "name": "Ruby" },
        { "id": 4, "name": "MongoDB" },
        {"id":5, "name": "Python"}
    ]
    onSelect(department: any) {
        this.router.navigate(['/departments', department.id]);
    }
}
