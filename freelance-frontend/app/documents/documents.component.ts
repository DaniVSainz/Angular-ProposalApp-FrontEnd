import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent{
  pageTitle: string = 'Documents Dashboard'
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'https://assets.entrepreneur.com/content/16x9/822/20151117183622-small-business-woman-desk-office.jpeg',
    },
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'https://assets.entrepreneur.com/content/16x9/822/20151117183622-small-business-woman-desk-office.jpeg',
    },
    {
      title: "My First Doc",
      description: "ADASDasdasd asd ",
      file_url: 'http://google.com',
      updated_at: 'asdasd',
      image_url: 'https://assets.entrepreneur.com/content/16x9/822/20151117183622-small-business-woman-desk-office.jpeg',
    }
  ]
}
