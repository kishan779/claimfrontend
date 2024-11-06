import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.css'
})
export class ClaimListComponent implements OnInit{

  claims!: Claim[];
  
  constructor(private claimService: ClaimService,
    private router: Router) { }

    ngOnInit(): void {
      this.getClaims();
    }
  
    private getClaims(){
      this.claimService.getAllclaims().subscribe(data => {
        this.claims = data;
      });
    }
  
    claimDetails(claimId: number){
      this.router.navigate(['claim-details', claimId]);
    }
  
    updateClaim(claimId: number){
      this.router.navigate(['update-claim', claimId]);
    }
  
    deleteClaim(claimId: number){
      this.claimService.deleteClaim(claimId).subscribe( data => {
        console.log(data);
        this.getClaims();
      })
    }

      logout(): void {
        this.router.navigateByUrl('/login'); 
    }

      createclaim(): void {
        this.router.navigateByUrl('/create-claim'); 
        } 

      claimlist(): void {
        this.router.navigateByUrl('/claim-list'); 
      }

}
