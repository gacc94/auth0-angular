import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {map} from "rxjs";
import {IUser} from "../../../core/interface/user.interface";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

    public users: Array<IUser> = [];

    private userService = inject(UserService)

    ngOnInit(){
        this.userService.getUsers()
            .pipe(
                map((value, index)=>value.data)
            )
            .subscribe({
                next: (values) => {
                    this.users = values
                    console.log(values);
                }
            })
    }

    private getUsers(){

    }
}
