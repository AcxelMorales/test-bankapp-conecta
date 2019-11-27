import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    form: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            numero_tarjeta: new FormControl(null, Validators.required),
            cuenta: new FormControl(null, Validators.required),
            issuer: new FormControl(null, Validators.required),
            nombre_tarjeta: new FormControl(null, Validators.required),
            marca: new FormControl(null, Validators.required),
            estatus: new FormControl(null, Validators.required),
            saldo: new FormControl(null, Validators.required),
            tipo_cuenta: new FormControl(null, Validators.required)
        });
    }

    send(): void {
        if (this.form.invalid) return;
        alert(JSON.stringify(this.form.value));

        this.form.reset();
    }

}
