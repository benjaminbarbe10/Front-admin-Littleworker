import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestService} from '../../Providers/request/request.service';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-lworker',
  templateUrl: './new-lworker.component.html',
  styleUrls: ['./new-lworker.component.scss']
})
export class NewLworkerComponent implements OnInit {

  constructor(private http: HttpClient, private requestService: RequestService) { }
  public baseUrl = environment.api_url;
  public selectedTags: string[] = [];
  public tags: any = [
    {
      title: 'Marketing',
      id: 'marketing'
    },
    {
      title: 'Etudes',
      id: 'studies'
    },
    {
      title: 'Travaux',
      id: 'works'
    },
    {
      title: 'Fondateurs',
      id: 'fonda'
    },
    {
      title: 'Développeurs',
      id: 'dev'
    }
  ];
  public imagePath;
  public selectedImage: any = {
    data : 'https://via.placeholder.com/500x500',
  };
  public name: string;
  public surname: string;
  public position: string;
  public image: any = {
    url : '',
  };
  public lworker = {
    name : this.name,
    surname: this.surname,
    position: this.position,
    tags: this.selectedTags,
    image: this.image
  };
  public uploader: FileUploader = new FileUploader({ url: this.baseUrl + 'upload/lworkers', itemAlias: 'lworker' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
  }

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
  onFileChanged(event, i) {
    const imageUrl: string = 'lworker' + '-' + event.target.files[0].name;
    i.url = imageUrl;
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

  public postLworker() {
    const headers = new HttpHeaders()
    // .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    const baseUrl = environment.api_url;
    this.http.post(this.baseUrl + 'lworkers', JSON.stringify(this.lworker), {
      headers
    })
        .subscribe(data => {
          console.log(data);
          this.uploader.uploadAll();
          // @ts-ignore
          if (!alert('Nouveau membre enregistré')) {window.location.reload(); }
        });
  }
}
