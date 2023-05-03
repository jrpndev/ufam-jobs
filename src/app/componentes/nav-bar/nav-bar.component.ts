import { Component } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private tools : ToolsService){}
  searchContent(){
    
  }
  logout(){
    this.tools.loginpath();
  }
  profile(){

  }
  config(){

  }
  dashboard(){
    
  }
}
