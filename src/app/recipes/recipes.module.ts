import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RecipesComponent, RecipeDetailComponent, RecipeEditComponent, RecipeListComponent, RecipeStartComponent, RecipeItemComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RecipesRoutingModule]
})
export class RecipesModule {}
