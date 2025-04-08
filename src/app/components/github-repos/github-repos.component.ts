import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GitHubService, GitHubRepo } from '../../services/github.service';

@Component({
  selector: 'app-github-repos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GitHubReposComponent {
  username: string = '';
  repositories: GitHubRepo[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private githubService: GitHubService) { }

  searchRepositories(): void {
    if (!this.username.trim()) {
      this.error = 'Por favor, insira um nome de usuário';
      return;
    }

    this.loading = true;
    this.error = '';
    this.repositories = [];

    this.githubService.getUserRepositories(this.username)
      .subscribe({
        next: (repos) => {
          this.repositories = repos;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erro ao buscar repositórios. Verifique se o usuário existe.';
          this.loading = false;
        }
      });
  }
} 