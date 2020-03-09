import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Products } from '../common/product';

@Component({
  selector: 'app-admin-paneli',
  templateUrl: './admin-paneli.component.html',
  styleUrls: ['./admin-paneli.component.css']
})
export class AdminPaneliComponent implements OnInit {

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
