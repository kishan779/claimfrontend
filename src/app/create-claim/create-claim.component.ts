import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrl: './create-claim.component.css'
})
export class CreateClaimComponent {

  claim: Claim = new Claim();

  constructor(private claimService: ClaimService,
    private router : Router ) {}

  ngOnInit(): void{

  }

  saveEmployee(){
    this.claimService.createClaim(this.claim).subscribe( data =>{
      console.log(data);
      this.goToAllclaims();
    },
    error => console.log(error));
  }

  goToAllclaims(){
    this.router.navigate(['/claims']);
  }

  onSubmit(){ 

    console.log('Form submitted sucessfully!.', this.claim); 

    this.saveEmployee(); 

  } 

  logout(): void {
    this.router.navigateByUrl('/login'); 
}

  createclaim(): void {
    this.router.navigateByUrl('/create-claim'); 
    } 

  claimlist(): void {
    this.router.navigateByUrl('/claims'); 
  }

}
