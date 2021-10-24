import { Component, OnInit } from '@angular/core';
import { INote } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private idUrl: ActivatedRoute
  ) {}

  public idNotaMod: number;

  ngOnInit() {
    this.idNotaMod = parseInt(this.idUrl.snapshot.paramMap.get('id'));
  }

  public titulo: string;
  public descripcion: string;
  public fechaVencimiento: Date;
  public notaM: INote;

  public modificar() {
    this.notaM = this.noteService.buscarNota(this.idNotaMod);

    this.notaM.titulo = this.titulo;
    this.notaM.descripcion = this.descripcion;
    this.notaM.fechaVencimiento = this.fechaVencimiento;

    this.noteService.modificarNota(this.idNotaMod, this.notaM);
  }
}
