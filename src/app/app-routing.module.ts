import { LandingComponent } from './component/landing/landing.component';
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
    redirectTo: 'landing',
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
        path: 'dashboard',
        loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },

      {
        path: 'view-bids',
        loadChildren: () => import('./page/view-bids/view-bids.module').then( m => m.ViewBidsPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
       {
    path: 'table',
    loadChildren: () => import('./page/table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'sold-shares',
    loadChildren: () => import('./page/sold-shares/sold-shares.module').then( m => m.SoldSharesPageModule)
  },

  {
    path: 'notifications',
    loadChildren: () => import('./page/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },

  {
    path: 'terms',
    loadChildren: () => import('./page/terms/terms.module').then( m => m.TermsPageModule)
  },

  {
    path: 'referrals',
    loadChildren: () => import('./page/referrals/referrals.module').then( m => m.ReferralsPageModule)
  },
  
  {
    path: 'bought-shares',
    loadChildren: () => import('./page/bought-shares/bought-shares.module').then( m => m.BoughtSharesPageModule)
  },

  {
    path: 'incentive-wallet',
    loadChildren: () => import('./page/incentive-wallet/incentive-wallet.module').then( m => m.IncentiveWalletPageModule)
  },
  {
    path: 'pending-shares',
    loadChildren: () => import('./page/pending-shares/pending-shares.module').then( m => m.PendingSharesPageModule)
  },

    ]
  },
  {
    path: 'sign-up/:id',
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
 
 
  {
    path: 'sold-shares',
    loadChildren: () => import('./page/sold-shares/sold-shares.module').then( m => m.SoldSharesPageModule)
  },
  
 
  {
    path: 'confirm-sale',
    loadChildren: () => import('./page/confirm-sale/confirm-sale.module').then( m => m.ConfirmSalePageModule)
  },
  {
    path: 'refferals',
    loadChildren: () => import('./page/refferals/refferals.module').then( m => m.RefferalsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./page/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'admin-user-modal',
    loadChildren: () => import('./admin/admin-user-modal/admin-user-modal.module').then( m => m.AdminUserModalPageModule)
  },
  {
    path: 'admin-share-allocation',
    loadChildren: () => import('./admin/admin-share-allocation/admin-share-allocation.module').then( m => m.AdminShareAllocationPageModule)
  },

  {
    path: 'banking-details',
    loadChildren: () => import('./page/banking-details/banking-details.module').then( m => m.BankingDetailsPageModule)
  },
  {
    path: 'accouncements',
    loadChildren: () => import('./admin/accouncements/accouncements.module').then( m => m.AccouncementsPageModule)
  },
  
  {
    path: 'brought',
    loadChildren: () => import('./page/brought/brought.module').then( m => m.BroughtPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-bank',
    loadChildren: () => import('./page/user-bank/user-bank.module').then( m => m.UserBankPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./page/login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'view-announcements',
    loadChildren: () => import('./admin/view-announcements/view-announcements.module').then( m => m.ViewAnnouncementsPageModule)
  },
  {
    path: 'view-bids',
    loadChildren: () => import('./admin/view-bids/view-bids.module').then( m => m.ViewBidsPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./page/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'admin-pending-shares',
    loadChildren: () => import('./admin/admin-pending-sharees/admin-pending-sharees.module').then( m => m.AdminPendingShareesPageModule)
  },

  {path: 'landing', component: LandingComponent }

 


  




 




]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
