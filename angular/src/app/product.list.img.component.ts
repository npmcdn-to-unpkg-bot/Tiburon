import {Component, Input}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {ProductService, Product} from './product.service';;

@Component({
  selector: 'product-list-img',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/product.list.img.component.html'

})


export class ProductListImg{
  @Input()
  private products= [];
  @Input()
  private titulo;

  constructor(
    private uService:UserService,
    private pService:ProductService,
    private routeParams:RouteParams,
    private router : Router
  ){}

}
