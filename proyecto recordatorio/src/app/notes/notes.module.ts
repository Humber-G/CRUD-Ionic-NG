import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { NoteService } from 'src/services/notes/Note.service';

@NgModule({
  declarations: [AgregarComponent, ListarComponent, ModificarComponent],
  imports: [CommonModule, NotesRoutingModule, FormsModule],
  providers: [NoteService],
})
export class NotesModule {}
