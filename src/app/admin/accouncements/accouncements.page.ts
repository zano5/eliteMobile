import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoucementsService } from 'src/app/service/annoucements.service';

@Component({
  selector: 'app-accouncements',
  templateUrl: './accouncements.page.html',
  styleUrls: ['./accouncements.page.scss'],
})
export class AccouncementsPage implements OnInit {

  message ='';
  accouncement = {} as Announcement;

  constructor(private accouncementsDAO: AnnoucementsService, private router: Router) { }

  ngOnInit() {
  }

  submit(){

    if(this.message != ''){


        this.accouncement.message = this.message;
        this.accouncement.created = new Date();
        this.accouncement.postedBy = 'Admin';

        
      this.accouncementsDAO.sendAnnoucements(this.accouncement).then(() => {

        alert('Announcements successfully posted');

        this.router.navigateByUrl('admin-users');

      }).catch(err =>{

        alert(err.message+ ' Unable to post announcements');
      });

    }else{


      alert('Announcements can not be a empty string');

    }

  }

}
