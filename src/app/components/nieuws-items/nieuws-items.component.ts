import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {NieuwsItem} from "../../models/nieuws-item";
import {NieuwsItemsService} from "../../services/nieuws-items.service";

@Component({
  selector: 'app-nieuws-items',
  templateUrl: './nieuws-items.component.html',
  styleUrls: ['./nieuws-items.component.css']
})
export class NieuwsItemsComponent implements OnInit {


  nieuwsItems: NieuwsItem[];
  selectedNieuwsItem: NieuwsItem;

  constructor(private router: Router, private route: ActivatedRoute,private nieuwsItemService: NieuwsItemsService) {
    setTimeout(()=> {
      this.nieuwsItemService.loadNieuwsItems()
        .subscribe(
          data => {
            this.nieuwsItems = data
          },
          error => console.error(error)
        );
    },0);
  }

  onSelect(nieuwsItem: NieuwsItem){
    this.selectedNieuwsItem = nieuwsItem;
    this.router.navigate(['nieuwsItem', { id: this.selectedNieuwsItem.id }]);
  }
  ngOnInit() {
  }
}
