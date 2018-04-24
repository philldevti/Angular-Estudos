import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../model/usuario';

@Component({
  selector: 'app-por-html',
  templateUrl: './por-html.component.html',
  styleUrls: ['./por-html.component.css']
})
export class PorHtmlComponent implements OnInit {
  public form = new Usuario(1, 'Eder Taveira', 35, 'edertaveira@gmail.com');
  constructor() { }

  ngOnInit() {
  }

}
