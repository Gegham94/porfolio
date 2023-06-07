import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule} from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { ExperienceComponent } from './pages/home/experience/experience.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { VideoPlayerComponent } from './pages/home/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    ExperienceComponent,
    ProjectsComponent,
    HomeComponent,
    SliderComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    DialogModule,
    ButtonModule,
    SidebarModule,
    TooltipModule,
    TabViewModule,
    ProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
