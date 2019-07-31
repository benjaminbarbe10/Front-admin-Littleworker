import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestService} from '../../Providers/request/request.service';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-shaper',
  templateUrl: './new-shaper.component.html',
  styleUrls: ['./new-shaper.component.scss']
})
export class NewShaperComponent implements OnInit {
  public selectedTags: string[] = [];
  public baseUrl = environment.api_url;
  constructor(private http: HttpClient, private requestService: RequestService) { }
  public tags: any = [
    {
      title: 'Architectes',
      id: 'archi'
    },
    {
      title: 'Chefs de chantier',
      id: 'worksite'
    },
    {
      title: 'Décorateurs',
      id: 'decorators'
    },
    {
      title: 'Paris',
      id: 'paris'
    },
    {
      title: 'Bordeaux',
      id: 'bordeaux'
    }
  ];

  public sinces: any = [
    {
      title: 1,
      id: '1'
    },
    {
      title: 2,
      id: '2'
    },
    {
      title: 3,
      id: '3'
    }
  ];
  public since: number;
  public name: string;
  public htag: string;
  public title: string;
  public description: string;
  public cities: string;
  public experience: number;
  public worksites: number;
  public paragraph: any = {
    title : '',
    description : ''
  };
  public selectedProjects: any;
  public selectedImages: any = {
    primary_left : {
      data : 'https://via.placeholder.com/500x700'
    },
    primary_right : {
      data : 'https://via.placeholder.com/500x700'
    },
    main : {
      data : 'https://via.placeholder.com/1000x700'
    },
    secondary_left : {
      data : 'https://via.placeholder.com/500x700'
    },
    secondary_right : {
      data : 'https://via.placeholder.com/500x700'
    },
  };
  public images: any = {
    primary_left : {
      url : '',
      alt : '',
    },
    primary_right : {
      url : '',
      alt : '',
    },
    main : {
      url : '',
      alt : '',
    },
    secondary_left : {
      url : '',
      alt : '',
    },
    secondary_right : {
      url : '',
      alt : '',
    },
  };
  public projects: any;
  public shaper = {
    name : this.name,
    tags: this.selectedTags,
    htag: this.htag,
    title: this.title,
    description: this.description,
    cities: this.cities,
    experience: this.experience,
    since: this.since,
    worksites: this.worksites,
    images: this.images,
    projects: this.selectedProjects,
    paragraph: this.paragraph
  };
  public dropdownSettings = {};

  public imagePath;

  public uploader: FileUploader = new FileUploader({ url: this.baseUrl + 'upload/shapers', itemAlias: 'shaper' });
  preview(files, image) {
    if (files.length === 0) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      image.data = reader.result;
    };
  }
  ngOnInit() {
    this.getProjects();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Tous selectionner',
      unSelectAllText: 'Tous désectionner',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onFileChanged(event, i) {
    const imageUrl: string = 'shaper' + '-' + event.target.files[0].name;
    i.url = imageUrl;
  }

  public postShaper() {
    const headers = new HttpHeaders()
    // .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'shapers', JSON.stringify(this.shaper), {
      headers
    })
        .subscribe(data => {
          console.log(data);
          this.uploader.uploadAll();
          // @ts-ignore
          if (!alert('Nouveau partenaire enregistré')) {window.location.reload(); }
        });
  }
  public changeCheckboxState(tag: any) {
    const index = this.selectedTags.indexOf(tag.title);
    if (index === -1) {
      this.selectedTags.push(tag.title);
    } else {
      this.selectedTags.splice(index, 1);
    }
    console.log(this.selectedTags);
    const checkbox = document.getElementById(tag.id + '-label');
    if (checkbox.classList.contains('selected-tags-label')) {
      checkbox.classList.remove('selected-tags-label');
    } else {
      checkbox.classList.add('selected-tags-label');
    }
  }
  public getProjects() {
    this.requestService.getProjects()
        .then((data) => {
          this.projects = data;
          console.log(this.projects);
        });
  }
}
