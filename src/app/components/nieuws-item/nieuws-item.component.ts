import { Component, OnInit } from '@angular/core';
import {NieuwsItemsService} from "../../services/nieuws-items.service";
import {Router, ActivatedRoute} from "@angular/router";
import {NieuwsItem} from "../../models/nieuws-item";
import {Subscription} from "rxjs";
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-nieuws-item',
  templateUrl: './nieuws-item.component.html',
  styleUrls: ['./nieuws-item.component.css']
})
export class NieuwsItemComponent implements OnInit {

  paramsSub:Subscription;
  nieuwsItemId:string;
  nieuwsItem: NieuwsItem;

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[]=[];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private nieuwsItemService: NieuwsItemsService) {



    setTimeout(()=> {
      this.paramsSub = route.params.subscribe(
        params => this.nieuwsItemId = params['id']
      );
      this.nieuwsItemService.loadNieuwsItem(this.nieuwsItemId)
        .subscribe(
          data => {
            this.nieuwsItem = data;
            (<FormControl>this.myForm.controls['titel'])
              .setValue(this.nieuwsItem.titel, { onlySelf: true });

            (<FormControl>this.myForm.controls['samenvattingOverzicht'])
              .setValue(this.nieuwsItem.samenvattingOverzicht, { onlySelf: true });

            this.myForm.valueChanges
             .subscribe(
               nieuwsItem => this.nieuwsItem = nieuwsItem
              );
            //(<FormControl>this.myForm).setValue(this.nieuwsItem,{onlySelf: true});
            //Dit werkt alleen als het hele model in de form is beschreven

            console.log(data)
          },
          error => console.error(error)
        );
    },0);
  }



  ngOnInit() {
    console.log("ngOnInit")
    this.myForm = new FormGroup({
      id: new FormControl(''),
      titel: new FormControl('titel', [<any>Validators.required, <any>Validators.minLength(5)]),
      samenvattingOverzicht: new FormControl(('samenvattingOverzicht'))

    });

  }

  save(nieuwsItem: NieuwsItem, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(nieuwsItem, isValid);
  }
}
