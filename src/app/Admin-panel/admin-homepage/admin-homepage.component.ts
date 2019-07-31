import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})


export class AdminHomepageComponent implements OnInit {
  constructor() { }

  public adminContent = [
    {
      name: 'Nos réalisations',
      firstBtn: 'Modifier la landing',
      firstBtnUrl: '#',
      secondBtn: 'Ajouter une Réalisation',
      secondBtnUrl: '/admin/new-project'
    },
    {
      name: 'Nos Partenaires',
      firstBtn: 'Modifier la landing',
      firstBtnUrl: '#',
      secondBtn: 'Ajouter un partenaire',
      secondBtnUrl: '/admin/new-shaper'
    },
    {
      name: 'Presse',
      firstBtn: 'Modifier la landing',
      firstBtnUrl: '#',
      secondBtn: 'Ajouter une publication',
      secondBtnUrl: '/admin/new-press'
    },
    {
      name: 'Equipe',
      firstBtn: 'Modifier la landing',
      firstBtnUrl: '#',
      secondBtn: 'Ajouter une personne',
      secondBtnUrl: '/admin/new-lworker'
    },
    {
      name: 'Autre',
      firstBtn: 'Créer une landing',
      firstBtnUrl: '#',
      secondBtn: '',
      secondBtnUrl: '#'

    }
  ];
  ngOnInit() {
  }

}
