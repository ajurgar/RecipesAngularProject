import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AppRecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AppRecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { AppRecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppShoppingEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { AppShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AppShoppingListComponent,
    AppHeaderComponent, 
    AppShoppingEditComponent,
    AppRecipeListComponent,
    AppRecipeItemComponent,
    AppRecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
