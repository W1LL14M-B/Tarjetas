import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor(private router: Router ) {}

  ngOnInit(): void {
      
  }

  navegar() {
    this.router.navigate ([ '/marketplace'])

  }

}
