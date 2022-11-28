import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    
    constructor(private router: Router, private toastr: ToastrService) {
        
    }
    
    redirectApp(url: string) {
        this.router.navigateByUrl(url);
    }
    
    showMessage(type: string, message: string, title: string = "Mensaje del sistema") {
        switch (type) {
            case "error":
            this.toastr.error(message, title);
            break;
            case "success":
            this.toastr.success(message, title);
            break;
            case "warning":
            this.toastr.warning(message, title)
            break;
            default:
            break;
        }
    }
    
    
}
