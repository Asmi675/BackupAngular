import { Component, OnInit, inject } from '@angular/core';
import { APIService } from '../../../Service/user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-list-professional-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-list-professional-details.component.html',
  styleUrl: './admin-list-professional-details.component.css'
})
export class AdminListProfessionalDetailsComponent implements OnInit {
  APIService = inject(APIService);
  ProfessionalList:any[]=[];
  isShowed:boolean=false
  ngOnInit(): void {
    this.loadProfessionals();
  }
  loadProfessionals(){
    this.APIService.getProfessionals().subscribe((res:any) =>{
      console.log(res.result)
      this.ProfessionalList=res.result;
    })
  }

  
DeleteDetail: any = {
  "id": 0,
  "name": "",
  "domain": "",
  "email": "",
}
http = inject(HttpClient)
  onDelete(id:any) {
    this.http.delete("https://localhost:7057/api/Services/" + id).subscribe((res: any) => {
      
      alert("Professional record successfully Deleted!");
      window.location.reload()
    })
  }
ProfDetails:any=[]
  onDetails(value:any){
    this.isShowed=true
this.http.get("https://localhost:7057/api/Services/GetProfessional/"+value).subscribe((res:any)=>{
  console.log(res)
  this.ProfDetails=res.result
})
  }

  close(){
    this.isShowed=false
  }
}