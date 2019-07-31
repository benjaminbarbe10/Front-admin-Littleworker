import { Component, OnInit } from '@angular/core';
import { faLongArrowDown, faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import { BreakpointObserver } from '@angular/cdk/layout';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  faArrowDown = faLongArrowDown;
  faArrowRight = faLongArrowRight;

  public isDesktopDevise = false;
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(min-width: 800px)']).subscribe((result) => {
      this.isDesktopDevise = result.matches;
    });
  }
  public projects = [
    {
      name: 'meslay',
      budgect: 'moins de 50 000 €',
      surface: 57,
      duration: 2,
      cities: 'paris',
      selected: false
    },
    {
      name: 'dupaty',
      budgect: 'moins de 50 000 €',
      surface: 57,
      duration: 2,
      cities: 'paris',
      selected: false
    },
    {
      name: 'Wolfrom',
      budgect: 'moins de 50 000 €',
      surface: 57,
      duration: 2,
      cities: 'paris',
      selected: false
    },
    {
      name: 'dhalenne',
      budgect: 'moins de 50 000 €',
      surface: 57,
      duration: 2,
      cities: 'paris',
      selected: false
    },
  ];

  ngOnInit() {
  }
  public showProjectContent(project: any) {
    this.projects.forEach(p => {
      p.selected = false;
    });
    project.selected = !project.selected;
  }

}
