import { Component, OnInit } from '@angular/core';
import { AnnoucementsService } from 'src/app/service/annoucements.service';

@Component({
  selector: 'app-view-announcements',
  templateUrl: './view-announcements.page.html',
  styleUrls: ['./view-announcements.page.scss'],
})
export class ViewAnnouncementsPage implements OnInit {

  announcementList =[];

  constructor(private announceDao: AnnoucementsService) { }

  ngOnInit() {

    this.viewAnnouncement();
  }


  viewAnnouncement(){

    this.announceDao.getAnnouncements().subscribe(data =>{


      this.announcementList = data.map(e =>{

         return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Announcement
         }
      })

    })
  }


  delete(annoucement){

    this.announceDao.deleteAccouncements(annoucement);


  }


}
