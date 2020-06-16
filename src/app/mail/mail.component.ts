import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  constructor(private MailService : MailService,
    private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {  }

  openBottomSheet(): void {
    this._bottomSheet.open(compose);
  }
}


// compose mail component

@Component({
  selector: 'compose',
  templateUrl: 'compose.html',
})
export class compose {
  constructor(private _bottomSheetRef: MatBottomSheetRef<compose>,
    private MailService : MailService,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  sendMail(compose) {
    this.MailService.send(compose.to,compose.subject,compose.body).toPromise()
    .then(data => {
        console.log(data);
        if(data['body']['success'] == true) {
          this._snackBar.open(data['body']['message'], "undo", {
            duration: 2000,
          });
          this._bottomSheet.dismiss(compose);
        } else {
          this._snackBar.open("Mail Can Not Be Send", "show", {
            duration: 2000,
          });
        }
    }).catch(err => {
      alert('something wrong : '+err);
    });
  }
}