import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuOpen: boolean;
  public openedItem: any;
  public isDesktopDevise = false;
  public panelOpenState = false;

  public navigation: any = [
    {
      title: 'Nos réalisations',
      url: 'realisations',
      level2: [
        {
          title: 'Toutes nos réalisations',
          url: 'réalisations'
        },
        {
          title: 'Nos villes',
          url: 'réalisations',
          links: [
            {
              title: 'Toutes les réalisations à Paris',
              url: '#'
            },
            {
              title: 'Toutes les réalisations à Bordeaux',
              url: '#'
            }
          ]
        },
        {
          title: 'Types de réalisations',
          url: 'réalisations',
          links: [
            {
              title: 'Tous les appartements',
              url: '#'
            },
            {
              title: 'Toutes les maisons',
              url: '#'
            }
          ]
        },
        {
          title: 'Nos 2 projets coup de coeur',
          url: 'réalisations',
          links: [
            {
              title: 'Rénovation appartement - Bordeaux',
              url: '#'
            },
            {
              title: 'Rénovation Loft - Paris 3e',
              url: '#'
            },
            {
              title: 'Projet Rousseau',
              url: '#'
            }
          ]
        },
        {
          title: 'Blog',
          links: [
            {
              title: 'Agrandir une pièce',
              url: '#'
            },
            {
              title: 'Choisir un parquet écologique',
              url: '#'
            },
            {
              title: 'Tendance : les alcôves',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      title: 'Architecture d’intérieur',
      level2: [
        {
          title: 'La mission d’architecture d’intérieure',
          links: [
            {
              title: 'Notre accompagnement',
              url: '#'
            },
            {
              title: 'Le sur mesure',
              url: '#'
            }
          ]
        },
        {
          title: '10 raisons pour lesquelles choisir l’accompagnement Little Worker',
          links: [
            {
              title: 'Notre accompagnement',
              url: '#'
            },
            {
              title: 'Le sur mesure',
              url: '#'
            }
          ]
        },
        {
          title: 'Nos architectes partenaires',
          links: [
            {
              title: 'Tous nos architectes',
              url: '#'
            },
            {
              title: 'Nos achitectes à Paris',
              url: '#'
            },
            {
              title: 'Nos achitectes à Bordeaux',
              url: '#'
            }
          ]
        },
        {
          title: 'Tarifs architectes d’intérieur',
          links: [
            {
              title: 'Tous nos architectes',
              url: '#'
            },
            {
              title: 'Nos achitectes à Paris',
              url: '#'
            },
            {
              title: 'Nos achitectes à Bordeaux',
              url: '#'
            }
          ]
        },
        {
          title: 'Blog',
          links: [
            {
              title: 'Agrandir une pièce',
              url: '#'
            },
            {
              title: 'Choisir un parquet écologique',
              url: '#'
            },
            {
              title: 'Tendance : les alcôves',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      title: 'Travaux de rénovation',
      url: 'testbis',
      level2: [
        {
          title: 'Accompagnement travaux',
          links: [
            {
              title: 'Accompagenement travaux',
              url: '#'
            },
            {
              title: 'Notre fonctionnement',
              url: '#'
            },
            {
              title: 'Rénovation d\'appartement',
              url: '#'
            },
            {
              title: 'Rénovation à Paris',
              url: '#'
            },
            {
              title: 'Rénovation à Bordeaux',
              url: '#'
            },
            {
              title: 'Rénovation d\'échoppe à Bordeaux',
              url: '#'
            },
            {
              title: 'Rénovation de maison à Bordeaux',
              url: '#'
            }
          ]
        },
        {
          title: '10 raisons pour lesquelles choisir l’accompagnement Little Worker',
        },
        {
          title: 'Les rénovations dans vos quartiers',
          links: [
            {
              title: 'Rénovation Bordeaux : Chartrons',
              url: '#'
            },
            {
              title: 'Rénovation Bordeaux : Gambetta',
              url: '#'
            },
            {
              title: 'Rénovation Bordeaux : Quinconces',
              url: '#'
            },
            {
              title: 'Rénovation Paris : 10e arrondissement',
              url: '#'
            },
            {
              title: 'Rénovation Paris : 18e arrondissement',
              url: '#'
            },
            {
              title: 'Rénovation Paris : 11e arrondissement',
              url: '#'
            }
          ]
        },
        {
          title: 'Nos chefs de chantiers',
          links: [
            {
              title: 'Tous nos chefs de chantiers',
              url: '#'
            },
            {
              title: 'Paris',
              url: '#'
            }
          ]
        },
        {
          title: 'Blog',
          links: [
            {
              title: 'Agrandir une pièce',
              url: '#'
            },
            {
              title: 'Choisir un parquet écologique',
              url: '#'
            },
            {
              title: 'Tendance : les alcôves',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      title: 'Les guides',
      url: 'testbis',
    },
    {
      title: 'À propos',
      url: 'testbis',
    },
    {
      title: 'Espace Pro',
      url: 'testbis',
    }
  ];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(min-width: 800px)']).subscribe((result) => {
      this.isDesktopDevise = result.matches;
    });
  }

  ngOnInit() {
  }

  public openAndCloseNav() {
    const nav = document.getElementById('side-navbar');
    if (this.isMenuOpen) {
      nav.style.width = '0';
      nav.style.boxShadow = 'unset';
      nav.style.opacity = '0';
      this.isMenuOpen = false;
    } else {
      nav.style.width = '90%';
      nav.style.boxShadow = '-16px 15px 15px 4px rgba(111,111,111,0.5)';
      nav.style.opacity = '1';
      this.isMenuOpen = true;
    }
  }

  public showGeolocPopup() {
    const popup = document.getElementById(`geolocPopup`);

    popup.classList.add('show');
  }

  public showCollapsedMenu(item: any) {
    this.openedItem = item;
    if (item.level2) {
      const menu = document.getElementById(`collapsed-menu`);
      if (menu !== null) {
        menu.classList.remove('hide');
        menu.classList.add('show');
      }
    } else {
      this.hideCollapsedMenu();
    }
  }
  public hideCollapsedMenu() {
    const menu = document.getElementById(`collapsed-menu`);
    if (menu !== null) {
      menu.classList.remove('show');
      menu.classList.add('hide');
    }
  }
}



