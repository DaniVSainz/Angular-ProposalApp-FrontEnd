import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent{
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'http://google.com',
    },
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'http://google.com',
    },
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'http://google.com',
    }
  ]
}
