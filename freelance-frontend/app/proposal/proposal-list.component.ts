import { Component } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls:['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://google.com', 'Ruby on rails', 150, 120, 15,"danivsainz@gmail.com" )
  proposalTwo: Proposal = new Proposal(99, 'qwetc Company', 'http://google.com', 'Ruby on rails', 150, 120, 15,"danivsainz@gmail.com" )
  proposalThree: Proposal = new Proposal(150, 'hfg Company', 'http://google.com', 'Ruby on rails', 150, 120, 15,"danivsainz@gmail.com" )
  proposals: Proposal[]= [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}