import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    
    template: `<h1>You selected department with id= {{departmentid}}</h1>`,
})
export class DepartmentDetailComponent implements OnInit{
    public departmentid: any;
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.departmentid = id;
    }
}
