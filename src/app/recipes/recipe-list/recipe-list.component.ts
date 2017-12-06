<<<<<<< HEAD
import { Component, OnInit, OnDestory } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
<<<<<<< HEAD
export class RecipeListComponent implements OnInit, OnDestory {
=======
export class RecipeListComponent implements OnInit, OnDestroy {
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e
  recipes: Recipe[];
  private subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
<<<<<<< HEAD

    this.recipes = this.recipeService.getRecipes();
    
=======
    this.recipes = this.recipeService.getRecipes();
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

<<<<<<< HEAD
  ngOnDestory() {
=======
  ngOnDestroy() {
>>>>>>> 087802a3ac261b63c7d52eb61eb5763968fd678e
    this.subscription.unsubscribe();
  }
}
