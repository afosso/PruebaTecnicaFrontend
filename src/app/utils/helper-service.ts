import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor(private router: Router) {
        
    }

    redirectApp(url: string) {
        this.router.navigateByUrl(url);
    }


}
