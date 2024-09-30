import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { Booking } from '../create-booking/create-booking.component';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent {
  selectedBookingId: string | null = null;
  bookingObj: Booking=new Booking();

  cities: string[] = ["Delhi", "Mumbai", "Pune", "Chandighar", "Noida", "Lakhnau", "Hariyana", "Banglore"];
  constructor(private activtedRoute: ActivatedRoute, private apiService: ApiServiceService) {
    this.selectedBookingId = this.activtedRoute.snapshot.paramMap.get('id');
    console.log("Selected booking Id", this.selectedBookingId);
  }
  ngOnInit() {
    this.getBookingDetailsById();
  }

  getBookingDetailsById() {
    //throw new Error("method not implemented");
    const endPoint = "bookings?id=" + this.selectedBookingId;
    this.apiService.getDataFromServer(endPoint).subscribe({
      next: (response: any) => {
        console.log("Response", response);
        if (response && response.length > 0) {
          this.bookingObj = response[0];
        }
      },
      error: (error: any) => {
        console.log(error);
      }

    })
  }
  upadatebooking(){
    console.log("update booking", this.bookingObj);
    //const endPoint = "bookings?id=" + this.selectedBookingId;
    const endPoint ="bookings/"+this.selectedBookingId;
    this.apiService.putDataToServer(endPoint, this.bookingObj).subscribe({
      next: (response: any) => {
        console.log("record updates");
      },
      error: () => {

      }

    })
  }
}
