import { FormsModule } from '@angular/forms';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    PagesError404Component
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LoginPageModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [NzNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
