import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './../shared/models/registerUser.model';

import { CountryBasic} from './../shared/models/countryBasic.model';
import { CountryService } from './../shared/services/country.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  newUser = new RegisterUser();
  countryList: CountryBasic[];
  countryNamesList: string[];
  
  constructor(private countryService: CountryService) { }



  ngOnInit() {

    let func = (res:string[]) => {this.countryNamesList = res};
    this.countryService.getCountriesNames(func);

    this.countryService.getCountryiesInfo()
      .subscribe(
        (res: CountryBasic[]) => { this.countryList = res }
      )
  }
}

