import { Component } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  bookingObj :Booking = new Booking();

  cities:string[]=["Delhi","Mumbai","Pune","Chandighar","Noida","Lakhnau","Hariyana","Banglore"];

  createbooking(){
    console.log("New Booking",this.bookingObj);
  }
}
export class Booking{
  id!:number;
  name !:string;
  source !:string;
  destination !:string;
  travelDate !:string;
}