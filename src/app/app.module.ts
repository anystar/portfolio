import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './content-section/sidebar/sidebar.component';
import { IconBlockComponent } from './blocks/icon-block/icon-block.component';
import { ContactSectionComponent } from './content-section/contact-section/contact-section.component';
import { VideoComponent } from './blocks/video/video.component';
import { WebDesignComponent } from './content-section/web-design/web-design.component';
import { PhotographyComponent } from './content-section/photography/photography.component';
import { GameDesignComponent } from './content-section/game-design/game-design.component';
import { AboutComponent } from './content-section/about/about.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FabricationComponent } from './content-section/fabrication/fabrication.component';

library.add(faCoffee);

const appRoutes: Routes = [
  { path: 'web-design', component: WebDesignComponent },
  { path: 'game-design', component: GameDesignComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IconBlockComponent,
    ContactSectionComponent,
    VideoComponent,
    WebDesignComponent,
    PhotographyComponent,
    GameDesignComponent,
    AboutComponent,
    FabricationComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true,
        anchorScrolling: 'disabled',
        scrollPositionRestoration: 'disabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }