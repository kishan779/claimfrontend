import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrl: './claim-details.component.css'
})
export class ClaimDetailsComponent implements OnInit{
  id!: number;
  claim!: Claim;
  constructor (private route: ActivatedRoute, private claimService: ClaimService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.claim = new Claim();
    this.claimService.getClaimById(this.id).subscribe(data => {
      this.claim = data;
    });
  }

}
