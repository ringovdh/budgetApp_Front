import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "./comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiURL = 'http://localhost:8080/comments/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiURL)
  }

  find(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(this.apiURL+ id)
  }

  delete(id: number) {
    return this.httpClient.delete<Comment>(this.apiURL + id, this.httpOptions)
  }

  create(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.apiURL, JSON.stringify(comment), this.httpOptions)
  }

  update(id: number, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(this.apiURL + id, JSON.stringify(comment), this.httpOptions)
  }
}
