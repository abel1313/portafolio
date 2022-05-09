import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Certificado } from 'src/assets/certificadobase64';

@Component({
  selector: 'app-certifiacion',
  templateUrl: './certifiacion.component.html',
  styleUrls: ['./certifiacion.component.scss']
})
export class CertifiacionComponent implements OnInit {

  pdf: SafeStyle
  constructor( private readonly san: DomSanitizer) {

    
    this.pdf = this.san.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${Certificado.base64}`);
   }

  ngOnInit(): void {
  }

}
