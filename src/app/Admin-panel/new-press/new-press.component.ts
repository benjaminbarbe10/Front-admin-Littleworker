import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-new-press',
  templateUrl: './new-press.component.html',
  styleUrls: ['./new-press.component.scss']
})
export class NewPressComponent implements OnInit {
  public baseUrl = environment.api_url;
  public tags: any = [
    {
      title: 'Déco',
      id: 'deco'
    },
    {
      title: 'News',
      id: 'news'
    },
    {
      title: 'Travaux',
      id: 'works'
    },
    {
      title: 'Media',
      id: 'media'
    },
    {
      title: 'Instagram',
      id: 'instagram'
    }
  ];
  public selectedLogo: any = {
    data : 'https://via.placeholder.com/500x500',
  };
  public selectedTags: string[] = [];
  public logo: any = {
      url : '',
  };
    public url: any;
  public imagePath;


  public press = {
    tags: this.selectedTags,
    logo: this.logo,
    url: this.url
  };
  constructor(private http: HttpClient) { }

  public uploader: FileUploader = new FileUploader({ url: this.baseUrl + 'upload/press', itemAlias: 'press' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      console.log(file);
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
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
    const imageUrl: string = 'press' + '-' + event.target.files[0].name;
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

  public postPress() {
    console.log(this.press);
    const headers = new HttpHeaders()
    // .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'press', JSON.stringify(this.press), {
      headers
    })

  .subscribe(data => {
          console.log(data);
          this.uploader.uploadAll();
          // @ts-ignore
          if (!alert('Presse enregistré')) {
            window.location.reload();
          }

        });
  }

}
