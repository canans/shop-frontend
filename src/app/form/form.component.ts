import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Products } from '../common/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  urunForm = new FormGroup({
    urunAdi: new FormControl(''),
    urunAciklamasi: new FormControl(''),
    urunDetay: new FormControl(''),
    urunFiyat: new FormControl('')
  });
  urun: Products;

  constructor(private fb: FormBuilder) { }
   
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.urun = this.urunForm.value;
    console.log(this.urun)
  }
  temizle() {
    this.urunForm.reset();
  }

}
