import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildesPageRoutingModule } from './childes-routing.module';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule} from '@angular/material/table';
import { ChildesPage } from './childes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    MatExpansionModule,
    ChildesPageRoutingModule
  ],
  declarations: [ChildesPage]
})
export class ChildesPageModule {}
