import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { OwnCollectiblesComponent } from './component/own-collectibles/own-collectibles.component';
import { CollectibleItemComponent } from './component/own-collectibles/collectible-item/collectible-item.component';
import { ContainerComponent } from './container/container.component';
import { StartComponent } from './component/start/start.component';
import { DetailComponent } from './component/detail/detail.component';
import { CreateComponent } from './component/create/create.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TextComponent } from './component/detail/text/text.component';
import { AudioComponent } from './component/detail/audio/audio.component';
import { VideoComponent } from './component/detail/video/video.component';
import { ImageComponent } from './component/detail/image/image.component';
import { UnknownComponent } from './component/detail/unknown/unknown.component';
import { SafePipe } from './safe.pipe';
import { CreateAudioComponent } from './component/create/create-audio/create-audio.component';
import { CreateVideoComponent } from './component/create/create-video/create-video.component';
import { CreateTextComponent } from './component/create/create-text/create-text.component';
import { CreateUploadComponent } from './component/create/create-upload/create-upload.component';



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
