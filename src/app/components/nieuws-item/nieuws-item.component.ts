import {Component, OnInit} from '@angular/core';
import {NieuwsItemsService} from "../../services/nieuws-items.service";
import {Router, ActivatedRoute} from "@angular/router";
import {NieuwsItem} from "../../models/nieuws-item";
import {Subscription, Observable} from "rxjs";
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-nieuws-item',
  templateUrl: './nieuws-item.component.html',
  styleUrls: ['./nieuws-item.component.css']
})
export class NieuwsItemComponent implements OnInit {

  paramsSub: Subscription;
  nieuwsItemId: string;
  public nieuwsItem: NieuwsItem;

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private nieuwsItemService: NieuwsItemsService) {



    setTimeout(()=> {

      this.paramsSub = route.params.subscribe(
        params => {
          this.nieuwsItemId = params['id']
        }
      );
      this.nieuwsItemService.loadNieuwsItem(this.nieuwsItemId)
        .subscribe(
          data => {
            this.nieuwsItem = data;
            this.nieuwsItem.isSaved = true;
            (<FormControl>this.myForm.controls['titel'])
              .setValue(this.nieuwsItem.titel, {onlySelf: true});

            (<FormControl>this.myForm.controls['samenvattingOverzicht'])
              .setValue(this.nieuwsItem.samenvattingOverzicht, {onlySelf: true});

            this.myForm.valueChanges
              .subscribe(
                formValue => {
                  this.nieuwsItem.titel = formValue.titel,
                    this.nieuwsItem.samenvattingOverzicht = formValue.samenvattingOverzicht
                }
              );
            //(<FormControl>this.myForm).setValue(this.nieuwsItem,{onlySelf: true});
            //Dit werkt alleen als het hele model in de form is beschreven

            console.log(data)
          },
          error => {
            console.error(error);
console.log("error: "+ error.statusText)
            console.log((this.nieuwsItemId));
            //this.nieuwsItem = new NieuwsItem();
            //this.nieuwsItem.id = parseInt(this.nieuwsItemId);
            this.nieuwsItem ={
              id: parseInt(this.nieuwsItemId),
              titel:"",
              status:"concept",
              auteur:"",
              datum: new Date(),
              samenvattingOverzicht:"",
              afbeeldingIdOverzicht:0,
              samenvattingNieuwsbrief:"",
              afbeeldingIdNieuwsbrief:0,
              bericht:"",
              afbeeldingen:[0],
              isSaved:false
            };
            (<FormControl>this.myForm.controls['titel'])
              .setValue(this.nieuwsItem.titel, {onlySelf: true});

            (<FormControl>this.myForm.controls['samenvattingOverzicht'])
              .setValue(this.nieuwsItem.samenvattingOverzicht, {onlySelf: true});

            this.myForm.valueChanges
              .subscribe(
                formValue => {
                  this.nieuwsItem.titel = formValue.titel,
                    this.nieuwsItem.samenvattingOverzicht = formValue.samenvattingOverzicht
                }
              );


          }
        );
    }, 0);
  }


  ngOnInit() {
    console.log("ngOnInit")
    this.myForm = new FormGroup({
      titel: new FormControl('titel', [<any>Validators.required, <any>Validators.minLength(5)]),
      samenvattingOverzicht: new FormControl(('samenvattingOverzicht'))

    });

  }

  bewaren() {
    console.log("saved: " + this.nieuwsItem.isSaved);
    if (this.nieuwsItem.isSaved){
    this.nieuwsItemService.saveNieuwsItem(this.nieuwsItem, this.nieuwsItem.id.toLocaleString()).subscribe(
      data => {
        console.log(data);
        return true;
      },
      error => {
        console.error("Error saving NieuwsItem!");

          return Observable.throw(error);
             }
    );}
    else{
      this.nieuwsItem.isSaved = true;
      this.nieuwsItemService.newNieuwsItem(this.nieuwsItem).subscribe(
        data => {
          console.log(data);
          return true;
        },
        error => {
          console.error("Error saving NieuwsItem!");

          return Observable.throw(error);
        }
      );
    }

  }


  // check if model is valid
  // if valid, call API to save customer

  // console.log(this.nieuwsItem, isValid);

}
