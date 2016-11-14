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

  myForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute,private nieuwsItemService: NieuwsItemsService) {

    this.myForm = fb.group({
      titel: new FormControl(),
      samenvattingOverzicht:new FormControl()
    });

    setTimeout(()=> {
      this.paramsSub = route.params.subscribe(
        params => this.nieuwsItemId = params['id']
      );
      this.nieuwsItemService.loadNieuwsItem(this.nieuwsItemId)
        .subscribe(
          data => {
            this.nieuwsItem = data;


            console.log(data)
          },
          error => console.error(error)
        );
    },0);
  }

  ngOnInit() {
  }

}
