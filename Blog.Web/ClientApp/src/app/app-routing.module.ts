import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { BlogManagerComponent } from './blog/blog-manager/blog-manager.component';
import { PostsManagerComponent } from './post/posts-manager/posts-manager.component';
import { BlogFormComponent } from './blog/blog-form/blog-form.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ActivationComponent } from './user/activation/activation.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { IsTheSameUserLoggedGuard } from './core/guards/isTheSameUserLogged.guard';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ProfilePreviewComponent } from './user/profile-preview/profile-preview.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [IsTheSameUserLoggedGuard],
    children: [
      { path: '', redirectTo: 'profile-preview', pathMatch: 'full'  },
      { path: 'profile-preview', component: ProfilePreviewComponent },
      { path: 'edit-profile', component: EditProfileComponent  },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
  { path: 'user/:userId', component: ProfilePreviewComponent},
  { path: 'activate/:userId/:code', component: ActivationComponent},
  { path: 'blog-manager/:blogId', component: BlogManagerComponent, canActivate: [AuthGuard] ,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full'  },
      { path: 'blog', component: BlogComponent },
      { path: 'blog-options', component: BlogFormComponent  },
      { path: 'posts-manager', component: PostsManagerComponent  },
      { path: 'post-form', component: PostFormComponent },
      { path: 'post-form/:postId', component: PostFormComponent },
    ]
  },
  { path: 'blog/:blogId', component: BlogComponent },
  { path: 'blog/:blogId/post/:id', component: PostComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  exports : [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
]

})
export class AppRoutingModule { }


