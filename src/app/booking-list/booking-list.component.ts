import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
bookingList:any;
constructor (private apiService:ApiServiceService,private router:Router){

}
ngOnInit(){
  console.log("task1")
  this.apiService.getDataFromServer("bookings").subscribe({
    next:(data:any)=>{
      console.log("data received task2",data);
      this.bookingList = data;

    },
    error:(error:any)=>{

    }
  })
  console.log("task3")
}
editBooking(id:number){
this.router.navigate(["/bus/edit-booking",id]);
}
deleteBooking(){
  this.router.navigate([]);
}
}
