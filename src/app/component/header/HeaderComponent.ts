import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/userAuth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isuserlogged: boolean = false;
  constructor(private  userAuth :UserAuthService) {}
  ngOnInit(): void {
    this.userAuth.getloggedSubject().subscribe((satus) => {
      this.isuserlogged = satus;
    });
  }
}
