import { Component, OnInit } from '@angular/core';
import { INote, TipoEstado } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.obtenerNotas();
    // console.log(this.noteService);
  }

  // public listar(){
  //   this.noteService.obtenerNotas();
  // }

  public eliminar(id: number) {
    this.noteService.eliminarNota(id);
    console.log(id);
  }
}
