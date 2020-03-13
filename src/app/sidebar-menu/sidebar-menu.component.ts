import { Component } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@portinari/portinari-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'ta-totvs-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent{

  menuItemSelected: string;
  collapsableMenu: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) { }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Tarefas', shortLabel: 'tasks', subItems: [
      { label: 'Tarefas Pendentes', action: this.navigateToPendingTasks},
      { label: 'Histórico', action: this.navigateToHistory}]}
  ];
  

  navigateToHistory(){
    this.router.navigate(['feed',this.route.snapshot.params.userId,'history',this.route.snapshot.params.userId]);
  }

  navigateToPendingTasks(){
    this.router.navigate(['feed',this.route.snapshot.params.userId,'task-list',this.route.snapshot.params.userId]);
  }


  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: item => this.logout() }
  ];

  logout(){
    this.userService.removeToken();
    this.router.navigate(['']);
  }

}
