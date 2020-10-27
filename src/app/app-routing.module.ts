import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemuPage } from './page/menu/sidemu/sidemu.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'sidemu',
    component: SidemuPage,
    children: [

      {
        path: 'detail',
        loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'banking-details',
        loadChildren: () => import('./page/banking-details/banking-details.module').then( m => m.BankingDetailsPageModule)
      },

      {
        path: 'view-bids',
        loadChildren: () => import('./page/view-bids/view-bids.module').then( m => m.ViewBidsPageModule)
      },

    ]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./page/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
 
  {
    path: 'make-bid',
    loadChildren: () => import('./page/make-bid/make-bid.module').then( m => m.MakeBidPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./page/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'add-bid',
    loadChildren: () => import('./page/add-bid/add-bid.module').then( m => m.AddBidPageModule)
  },
  {
    path: 'bid-filter',
    loadChildren: () => import('./page/bid-filter/bid-filter.module').then( m => m.BidFilterPageModule)
  },
  {
    path: 'admin-sign-in',
    loadChildren: () => import('./admin/admin-sign-in/admin-sign-in.module').then( m => m.AdminSignInPageModule)
  },
  {
    path: 'admin-users',
    loadChildren: () => import('./admin/admin-users/admin-users.module').then( m => m.AdminUsersPageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
