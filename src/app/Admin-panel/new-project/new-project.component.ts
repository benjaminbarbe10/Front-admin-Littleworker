import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {RequestService} from '../../Providers/request/request.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  public baseUrl = environment.api_url;
  public selectedTags: string[] = [];
  public selectedOthersImages: string[] = [];

  constructor(private http: HttpClient, private requestService: RequestService) { }
  public tags: any = [
    {
      title: 'Appartements',
      id: 'apartments'
    },
    {
      title: 'Maisons',
      id: 'homes'
    },
    {
      title: 'Paris - IDF',
      id: 'idf'
    },
    {
      title: 'Bordeaux - CUB',
      id: 'cub'
    },
    {
      title: 'En cours',
      id: 'current'
    }
  ];
  public budgects: any = [
    {
      title: 'Moins de 50 000 €',
      id: '1'
    },
    {
      title: 'Entre 50 000 € et 100 000 €',
      id: '2'
    },
    {
      title: 'Entre 100 000 € et 150 000 €',
      id: '3'
    },
    {
      title: 'Entre 150 000 € et 200 000 €',
      id: '4'
    }
  ];
  public durations: any = [
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
    },
    {
      title: 4,
      id: '4'
    },
    {
      title: 5,
      id: '5'
    },
    {
      title: 6,
      id: '6'
    },
    {
      title: 7,
      id: '7'
    },
    {
      title: 8,
      id: '8'
    }
  ];
  public name: string;
  public htag: string;
  public title: string;
  public description: string;
  public cities: string;
  public surface: number;
  public budgect: string;
  public duration: number;
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
    }
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


  public project = {
    name : this.name,
    tags: this.selectedTags,
    htag: this.htag,
    title: this.title,
    description: this.description,
    cities: this.cities,
    surface: this.surface,
    budgect: this.budgect,
    duration: this.duration,
    images: this.images,
    othersimages: this.selectedOthersImages,
    projects: this.selectedProjects,
    paragraph: this.paragraph
  };
  public dropdownSettings = {};

  public imagePath;
  public uploader: FileUploader = new FileUploader({ url: this.baseUrl + 'upload/projects', itemAlias: 'project' });
  public uploaderOthers: FileUploader = new FileUploader({ url: this.baseUrl + 'upload/projects', itemAlias: 'project' });

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
    this.uploaderOthers.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploaderOthers.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
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
    const imageUrl: string = 'project' + '-' + event.target.files[0].name;
    i.url = imageUrl;
  }
  onFileChangedOthersImages(uploader) {
    console.log(uploader);
  }
  public postProject() {
    for (const file of this.uploaderOthers.queue) {
      const imageUrl: string = 'project' + '-' + file.file.name;
      this.project.othersimages.push(imageUrl);
    }
    console.log(this.project);
    const headers = new HttpHeaders()
        // .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'projects', JSON.stringify(this.project), {
      headers
    })
        .subscribe(data => {
          console.log(data);
          this.uploader.uploadAll();
          this.uploaderOthers.uploadAll();
          this.uploader.onCompleteAll = () => {
            this.uploaderOthers.onCompleteAll = () => {
                // @ts-ignore
                if (!alert('Projet enregistré')) {
                  window.location.reload();
                }
            };
          };
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
