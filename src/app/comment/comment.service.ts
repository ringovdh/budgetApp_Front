import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "./comment";

class Post {
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiURL = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiURL + '/comments')
  }

  find(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(this.apiURL + '/comments/' + id)
  }

  delete(id: number) {
    return this.httpClient.delete<Comment>(this.apiURL + '/comments/' + id, this.httpOptions)
  }

  create(comment: Comment): Observable<Post> {
    return this.httpClient.post<Post>(this.apiURL + '/comments', JSON.stringify(comment), this.httpOptions)
  }

  update(id: number, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(this.apiURL + '/comments/' + id, JSON.stringify(comment), this.httpOptions)
  }
}
