import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrl: './update-claim.component.css'
})
export class UpdateClaimComponent implements OnInit{
  id: number=0;
  claim: Claim = new Claim();
  constructor(private claimService: ClaimService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.claimService.getClaimById(this.id).subscribe(data => {
      this.claim = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.claimService.updateClaim(this.id, this.claim).subscribe( data =>{
      console.log(data)
      this.goToAllclaims();
    }
    , error => console.log(error));
  }

  goToAllclaims(){
    this.router.navigate(['/claims']);
  }
}
