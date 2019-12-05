import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  public teamMembers = [
    {
      name: 'Thomas',
      city: 'Strasbourg',
      photo: 'url',
      description: 'salut à tous',
      linkedin: 'url'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
