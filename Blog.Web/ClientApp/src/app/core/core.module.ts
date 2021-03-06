import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { SmallLoaderComponent } from './loader/small-loader/small-loader.component';
import { HttpService } from './services/http.service';
import { LoggerService } from './services/logger.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoaderService } from './loader/loader.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UploadFilesService } from './services/uploadFiles.service';
import { LocationService } from './services/location.service';
import { DefaultImagePipe } from './pipes/defaultImage.pipe';
import { AlertService } from './services/alert.service';
import { BlogAlertComponent } from './blog-alert/blog-alert.component';
import { AuthGuard } from './guards/auth.guard';
import { IsTheSameUserLoggedGuard } from './guards/isTheSameUserLogged.guard';


@NgModule({
    declarations: [
        LoaderComponent,
        SmallLoaderComponent,
        DefaultImagePipe,
        BlogAlertComponent,
    ],
    exports: [
        LoaderComponent,
        SmallLoaderComponent,
        DefaultImagePipe,
        BlogAlertComponent,
    ],
    imports: [
        AngularFontAwesomeModule,
        NgbModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        HttpService,
        LoggerService,
        LoaderService,
        UploadFilesService,
        LocationService,
        AlertService,
        AuthGuard,
        IsTheSameUserLoggedGuard,
    ]
})
export class CoreModule {
}
