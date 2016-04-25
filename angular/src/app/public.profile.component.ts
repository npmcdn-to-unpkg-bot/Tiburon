import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams, Router} from 'angular2/router';
import {UserService, User} from './user.service';
import {ProductService, Product} from './product.service';
import {ProductListImg} from './product.list.img.component';
import {FollowService} from './follow.service';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES, ProductListImg],
  templateUrl: 'app/public.profile.component.html'

})

export class PublicProfileComponent{

  private user : User;
  private follow : boolean;
  private showFollow : boolean = true;

  constructor(
    private uService:UserService,
    private routeParams:RouteParams,
    private fService : FollowService
  ){

    this.user=this.uService.getUser(+this.routeParams.get('id'));
    if(this.user.id === this.uService.getIdUserLogued()){
      this.showFollow = false;
    }
    this.refreshFollow();
  }

  refreshFollow(){
    this.follow = this.fService.isFollowing(this.uService.getIdUserLogued(),this.user.id);
  }

  noSeguir(id){
    this.fService.deleteFollow(this.uService.getIdUserLogued(),id);
    this.refreshFollow();
  }
  seguir(id){
    this.fService.addFollow(this.uService.getIdUserLogued(),id);
    this.refreshFollow();
  }
}
