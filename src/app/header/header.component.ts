import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Response } from '@angular/http';
import {DataStorageService} from "../shared/data-storage.service";
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
<<<<<<< HEAD
=======
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
        (response: Response) => {
            console.log(response);
        },
        (error: Response) => console.log(error)
    );
  }

  onFetchData() {
      this.dataStorageService.getRecipes();
  }
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e
}
