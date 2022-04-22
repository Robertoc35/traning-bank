import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'traning-bank';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}




