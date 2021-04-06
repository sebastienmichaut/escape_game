import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

  rooms: Room[];

difficultyMin = 1;

  constructor(
    public roomService: RoomService
  ) {}

 async ngOnInit() {
    // this.rooms = this.roomService.getRooms();

   this.rooms =await this.roomService.getRoomsByHttp();
  }

}
