import {Component, OnInit} from '@angular/core';
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

  constructor(private router: Router, private route: ActivatedRoute, private nieuwsItemService: NieuwsItemsService) {
    setTimeout(()=> {
      this.nieuwsItemService.loadNieuwsItems()
        .subscribe(
          data => {
            this.nieuwsItems = data
          },
          error => console.error(error)
        );
    }, 0);
  }


   onSelect(nieuwsItem: NieuwsItem) {
    this.selectedNieuwsItem = nieuwsItem;
    this.router.navigate(['nieuwsItem', {id: this.selectedNieuwsItem.id}]);
  }

  ngOnInit() {
  }

  addNieuwsItem() {
    console.log("addNieuwsItem");
    let aantalElementen: number = this.nieuwsItems.length - 1;
    console.log("aantalElementen: " + aantalElementen);
    let laatsteEelement: NieuwsItem = this.nieuwsItems[aantalElementen];
    console.log("laatsteEelement: " + laatsteEelement);
    let lastId: number =  parseInt(laatsteEelement.id.toLocaleString()||"0");
    lastId = lastId+1;
    console.log("lastId: " + lastId);
    this.router.navigate(['nieuwsItem', {id: lastId}]);
  }
}
