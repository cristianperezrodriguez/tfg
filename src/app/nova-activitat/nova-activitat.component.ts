

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { AssignaturesService } from '../_services/assignatures.service';
import { Assignatura } from '../_models/assignatura';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Activitat } from '../_models/activitat';
import { ActivitatsService } from '../_services/activitats.service';

@Component({
  selector: 'app-nova-activitat',
  templateUrl: './nova-activitat.component.html',
  styleUrls: ['./nova-activitat.component.css']
})
export class NovaActivitatComponent implements OnInit {
    assignaturaForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    uploadedFiles: Array < File > ;
    uploadedFileName = "";
    uploadedFilePath = "";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private assignaturesService: AssignaturesService,
        private activitatsService: ActivitatsService,
        private alertService: AlertService,
        private http: HttpClient
    ) {
       
    }

    ngOnInit() {
        this.assignaturaForm = this.formBuilder.group({
            nom: ['', Validators.required],
            data:['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.assignaturaForm.controls; }

    onSubmit() {
        this.uploadedFilePath = "";
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();
        
        // stop here if form is invalid
        if (this.assignaturaForm.invalid || this.uploadedFiles.length === 0) {
            return;
        }
        

        this.loading = true;
        this.upload();
        var idAssignatura = +this.route.snapshot.paramMap.get('id');
        let activitatAux = new Activitat(idAssignatura,this.f.nom.value, this.f.data.value, this.uploadedFilePath);
        this.activitatsService.addNewActivitat(activitatAux)
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

    fileChange(element) {
        this.uploadedFiles = element.target.files;
        this.uploadedFileName = this.uploadedFiles[this.uploadedFiles.length - 1].name

    }

    upload() {
        let formData = new FormData();
        /*for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }*/
        formData.append("uploads[]", this.uploadedFiles[this.uploadedFiles.length-1], this.uploadedFiles[this.uploadedFiles.length-1].name);
        this.http.post(`${environment.apiUrl}/api/upload`, formData)
            .subscribe((response) => {
                console.log('response received is ', response);
                this.uploadedFilePath = response['message']['uploads'][0]['path']

            })
    }

    
}
