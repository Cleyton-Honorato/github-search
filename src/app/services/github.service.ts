import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(username: string): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.apiUrl}/users/${username}/repos`);
  }
} 