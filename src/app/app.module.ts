import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { OwnCollectiblesComponent } from './own-collectibles/own-collectibles.component';
import { CollectibleItemComponent } from './own-collectibles/collectible-item/collectible-item.component';
import { ContainerComponent } from './container/container.component';
import { StartComponent } from './start/start.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TextComponent } from './detail/text/text.component';
import { AudioComponent } from './detail/audio/audio.component';
import { VideoComponent } from './detail/video/video.component';
import { ImageComponent } from './detail/image/image.component';
import { UnknownComponent } from './detail/unknown/unknown.component';
import { SafePipe } from './safe.pipe';
import { CreateAudioComponent } from './create/create-audio/create-audio.component';
import { CreateVideoComponent } from './create/create-video/create-video.component';
import { CreateTextComponent } from './create/create-text/create-text.component';
import { CreateUploadComponent } from './create/create-upload/create-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    OwnCollectiblesComponent,
    CollectibleItemComponent,
    ContainerComponent,
    StartComponent,
    DetailComponent,
    CreateComponent,
    TextComponent,
    AudioComponent,
    VideoComponent,
    ImageComponent,
    UnknownComponent,
    SafePipe,
    CreateAudioComponent,
    CreateVideoComponent,
    CreateTextComponent,
    CreateUploadComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
