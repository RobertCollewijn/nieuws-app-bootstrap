import { Component, OnInit } from '@angular/core';
import {NieuwsItemsService} from "../../services/nieuws-items.service";
import {Router, ActivatedRoute} from "@angular/router";
import {NieuwsItem} from "../../models/nieuws-item";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nieuws-item',
  templateUrl: './nieuws-item.component.html',
  styleUrls: ['./nieuws-item.component.css']
})
export class NieuwsItemComponent implements OnInit {

  paramsSub:Subscription;
  nieuwsItemId:string;
  nieuwsItem: NieuwsItem;

  constructor(private router: Router, private route: ActivatedRoute,private nieuwsItemService: NieuwsItemsService) {

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
