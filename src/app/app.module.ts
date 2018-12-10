import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMatModule } from './shared/angularMat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListDetailComponent } from './shared/list-detail/list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMatModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot()
  ],
  entryComponents: [
    ListDetailComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
