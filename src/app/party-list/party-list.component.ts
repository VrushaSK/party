import { Component, OnInit } from '@angular/core';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {
  parties!: any[]; // Array to store party data

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {
    this.getParties(); // Fetch parties when component is initialized
  }

  // Method to fetch parties from the service
  getParties(): void {
    this.partyService.getParties().subscribe(
      (data) => {
        this.parties = data; // Assign fetched parties to component variable
      },
      (error) => {
        console.error('Error fetching parties:', error); // Log error if fetching fails
      }
    );
  }

  // Method to delete a party
  deleteParty(id: number): void {
    if (confirm('Are you sure you want to delete this party?')) {
      this.partyService.deleteParty(id).subscribe(
        () => {
          // Remove the deleted party from the list
          this.parties = this.parties.filter(party => party.id !== id);
        },
        (error) => {
          console.error('Error deleting party:', error); // Log error if deletion fails
        }
      );
    }
  }
}
