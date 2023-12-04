import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-general',
  templateUrl: './list-general.component.html',
  styleUrls: ['./list-general.component.css']
})
export class ListGeneralComponent {
  @Input() ListGeneral:any;
  
}
