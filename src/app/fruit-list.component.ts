import { Component, OnInit } from '@angular/core';
import { IngredientCRUDService,  Ingredient } from './ingredientCRUD.service'

@Component({
    selector: 'fruit-list',
    templateUrl: './fruit-list.component.html',
    styleUrls: ['./fruit-list.component.css']
})

export class FruitListComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(
        private ingredientCRUD: IngredientCRUDService,
    ) {}

    ngOnInit() {
        this.getAllFruits();
    }

    getAllFruits() {
        this.ingredientCRUD.getFruits()
            .subscribe(data => { this.ingredients = data});
    }

    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
}