import { Component } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  showChangePassword: boolean = false;
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private tools: ToolsService) {}

  logout() {
    this.tools.loginpath();
  }

  openChangePassword() {
    this.showChangePassword = true;
  }

  cancelChangePassword() {
    this.showChangePassword = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  changePassword() {
    // Implement your password change logic here
    // You can access the new password using this.newPassword
    // and the current password using this.currentPassword
    // You can also perform validations and display error messages if needed
    // After changing the password, you can reset the form and hide the change password section
    this.cancelChangePassword();
  }
}
