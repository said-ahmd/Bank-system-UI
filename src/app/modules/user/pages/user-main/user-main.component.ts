import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {UserMenuComponent} from "../../component/user-menu/user-menu.component";

@Component({
  selector: 'app-user-main',
  standalone: true,
    imports: [
        RouterOutlet,
        UserMenuComponent
    ],
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.css'
})
export class UserMainComponent {

}
