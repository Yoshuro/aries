import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { AboutComponent } from './components/about/about.component'
import { SearchComponent } from './components/search/search.component'

import { SpotifyService } from './services/spotify.service'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(routes),
                  FormsModule,
                  HttpModule
                ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  SearchComponent,
                  AboutComponent
                ],
  providers:    [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
