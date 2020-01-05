


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';

@Component({
  selector: 'app-nova-assignatura',
  templateUrl: './nova-assignatura.component.html',
  styleUrls: ['./nova-assignatura.component.css']
})
export class NovaAssignaturaComponent implements OnInit {
    assignaturaForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private assignaturesService: AssignaturesService,
        private alertService: AlertService
    ) {
       
    }

    ngOnInit() {
        this.assignaturaForm = this.formBuilder.group({
            codi: ['', Validators.required],
            nom: ['', Validators.required],
            any:['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.assignaturaForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.assignaturaForm.invalid) {
            return;
        }

        this.loading = true;
        let assignaturaAux = new Assignatura(this.f.codi.value,this.f.nom.value, this.f.any.value);
        this.assignaturesService.addNewAssignatura(assignaturaAux)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    cancelar()
    {
      this.router.navigate([this.returnUrl]);

    }
}
