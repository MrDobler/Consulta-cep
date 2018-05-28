import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatSnackBar
} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public cepService: CepService, private snackBar: MatSnackBar) { }

  public cep: string;
  public cepData;
  public arrayData: Array<any> = [];

  ngOnInit() {
  }

  getCep(cep) {
    this.cepService.getCep(cep).subscribe(data => {
      const response = (data as any);
      this.cepData = response;
      this.arrayData['logradouro'] = this.cepData.logradouro;
      this.arrayData['cep'] = this.cepData.cep;
      this.arrayData['complemento'] = this.cepData.complemento;
      this.arrayData['bairro'] = this.cepData.bairro;
      this.arrayData['localidade'] = this.cepData.localidade;
      this.arrayData['uf'] = this.cepData.uf;
      this.arrayData['ibge'] = this.cepData.ibge;
    },
    error => {
      this.snackBar.open('Por favor, insiria um CEP válido!', 'Fechar', {'duration': 3000});
    });

  }
}
