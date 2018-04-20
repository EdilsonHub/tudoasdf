import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let category: Category = new Category();
    category.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required] 
    }, {});
     
    if(category.id != null) {
      this.categoryService.findOne(category.id).subscribe(category => {
          this.form.patchValue(category); 
        })
    }

  }
  salvar(category: Category) {
   // console.log("Estou aqui");
    this.categoryService.save(category).subscribe(response => {
      //redirecionameto;
      this.router.navigate(['/category']);
    });
  }
}


