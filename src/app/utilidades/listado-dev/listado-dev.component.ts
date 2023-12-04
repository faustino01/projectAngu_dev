import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-dev',
  templateUrl: './listado-dev.component.html',
  styleUrls: ['./listado-dev.component.css']
})
export class ListadoDevComponent {
  @Input() listDevU:any;
}
