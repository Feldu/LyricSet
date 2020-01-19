import {Component, Input, OnInit} from '@angular/core';
import {LyricSet} from '../../../../shared/interfaces';
import {MysetsService} from '../../../../core/services/mysets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-list-item',
  templateUrl: './set-list-item.component.html',
  styleUrls: ['./set-list-item.component.scss']
})
export class SetListItemComponent implements OnInit {
  @Input() set: LyricSet;

  constructor(private readonly mysetsService: MysetsService) {
  }

  ngOnInit() {
  }

}
