import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from "@angular/http";
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

  newNieuwsItem(nieuwsItem: NieuwsItem){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(nieuwsItem);
    console.log(body);

    let url = "http://localhost:3000/nieuwsItems";
    console.log(url);
    return this.http.post(url, body, options).map((res: Response) => res.json());
  }

  saveNieuwsItem(nieuwsItem: NieuwsItem, id:string){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(nieuwsItem);
    console.log(body);

    let url = "http://localhost:3000/nieuwsItems/"+id;
    console.log(url);
    return this.http.put(url, body, options).map((res: Response) => res.json());
  }
}
