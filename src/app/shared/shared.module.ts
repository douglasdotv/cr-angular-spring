import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppPipe } from './pipes/app.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, AppPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, AppPipe],
})
export class SharedModule {}
