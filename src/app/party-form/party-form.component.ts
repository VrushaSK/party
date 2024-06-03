import { Component, OnInit } from '@angular/core';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.css']
})
export class PartyFormComponent implements OnInit {
  partyData: any = {}; // Object to hold party data

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {
  }

  // Method to add or update party data
  saveParty(): void {
    // Check if party has an ID to determine if it's an update or create operation
    if (this.partyData.id) {
      this.partyService.updateParty(this.partyData).subscribe(
        () => {
          // Party updated successfully
          // You can add any success handling here (e.g., show a success message)
        },
        (error) => {
          console.error('Error updating party:', error); // Log error if update fails
        }
      );
    } else {
      this.partyService.addParty(this.partyData).subscribe(
        () => {
          // Party added successfully
          // You can add any success handling here (e.g., show a success message)
        },
        (error) => {
          console.error('Error adding party:', error); // Log error if add fails
        }
      );
    }
  }
}
