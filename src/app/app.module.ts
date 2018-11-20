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

const appRoutes: Routes = [
  { path: 'web-design', component: WebDesignComponent },
  { path: 'game-design', component: GameDesignComponent },
  { path: 'photography', component: PhotographyComponent }
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
    GameDesignComponent
  ],
  imports: [
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