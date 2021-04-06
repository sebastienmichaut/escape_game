import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Bienvenue visiteur';
  nbClassicRooms = 0;
  nbVirtualRooms = 0;
  ageMin = 12;
  ageMax = 120;

  rooms: Room[];

  constructor(
    public roomService: RoomService
  ){

  }

  async ngOnInit() {
    // this.rooms = this.roomService.getRooms();
    this.rooms = await this.roomService.getRoomsByHttp();

    // let rooms = this.rooms;
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].isVirtual) {
        this.nbVirtualRooms++;
      } else {
        this.nbClassicRooms++;
      }
    }

    setTimeout(() => {
      this.title = 'Saurez vous sortir vivant ?';
    }, 5000);
  }

  lastLi() {
    return 'amusement garanti';
  }
}

