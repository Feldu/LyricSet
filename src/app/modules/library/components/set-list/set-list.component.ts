import {Component, OnInit} from '@angular/core';
import {MysetsService} from '../../../../core/services/mysets.service';
import {MatDialog} from '@angular/material';
import {AddSetDialogComponent} from '../add-set-dialog/add-set-dialog.component';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {

  constructor(private readonly mysetsService: MysetsService,
              public dialog: MatDialog) {
  }


  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSetDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(() => {

    });
  }

}
