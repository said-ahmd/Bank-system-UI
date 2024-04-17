import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserControllerService } from "../../services/services/user-controller.service";
import { UserResponse } from '../../services/models';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  users: UserResponse[] = []; // Define an array to hold the retrieved users
  errorMessage: string = '';

  constructor(
    private router: Router,
    private userService: UserControllerService
  ) {}

  listUsers() {
    this.userService.getAllUsers()
      .subscribe({
        next: (res) => {
          if (res instanceof Blob && res.type === 'application/json') {
            res.text().then((text) => {
              const jsonResponse = JSON.parse(text);
              this.users = jsonResponse;
            });
          }
        },
        error: (err) => {
          this.errorMessage = 'Error fetching users.';
        }
      });
  }
}
