import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isClose = true;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.isClose = false;
  }

  close() {
    this.isClose = true;
  }
}
