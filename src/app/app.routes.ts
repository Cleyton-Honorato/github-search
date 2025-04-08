import { Routes } from '@angular/router';
import { GitHubReposComponent } from './components/github-repos/github-repos.component';

export const routes: Routes = [
  { path: '', component: GitHubReposComponent },
  { path: '**', redirectTo: '' }
];
