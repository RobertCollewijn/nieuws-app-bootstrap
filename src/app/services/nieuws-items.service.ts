import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NieuwsItem} from "../models/nieuws-item";

@Injectable()
export class NieuwsItemsService {

  constructor(private http: Http) {

  }

  loadNieuwsItems() {
    console.log('searching for $(search)');


    let url = "http://10.0.0.104:3000/nieuwsItems";
    return this.http.get(url).map((res: Response) => res.json());
  }

  loadNieuwsItem(search: string) {
    console.log('searching for $(search)' + search);
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);

    let url = "http://10.0.0.104:3000/nieuwsItems/"+search;
    return this.http.get(url).map((res: Response) => res.json());
  }

  editNieuwsItem(nieuwsItemId) {

  }
}
