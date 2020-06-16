import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { Mail } from '../model/mail.model';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  mails : Mail[];
  constructor(private mailService : MailService) { }

  ngOnInit() {
    this.getInbox();
  }

  getInbox() {
    this.mailService.getInbox().toPromise()
    .then(data => {
      this.mails = data['body']['mails'];
    }).catch(err => {
      alert("something wrong : "+err);
    })
  }

}
