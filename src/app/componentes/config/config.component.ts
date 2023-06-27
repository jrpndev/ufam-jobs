import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  configForm !: FormGroup;
  showChangePassword: boolean = false;

  constructor(private tools: ToolsService) {}

  ngOnInit(): void {
    this.configForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  logout() {
    this.tools.loginpath();
  }

  openChangePassword() {
    this.showChangePassword = true;
  }

  cancelChangePassword() {
    this.showChangePassword = false;
    this.configForm.reset();
  }

  changePassword() {
    if (this.configForm.valid) {
      const currentPassword = this.configForm.value.currentPassword;
      const newPassword = this.configForm.value.newPassword;
      const confirmPassword = this.configForm.value.confirmPassword;

      // Implement your password change logic here
      // You can access the new password using newPassword
      // and the current password using currentPassword
      // You can also perform validations and display error messages if needed

      this.cancelChangePassword();
    }
  }
}
