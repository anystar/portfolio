import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconBlockComponent } from './icon-block/icon-block.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IconBlockComponent,
    GalleryComponent,
    SectionHeaderComponent,
    ContactSectionComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
