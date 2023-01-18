import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getIssues()
  {
    return this.httpClient.get(`${this.uri}/issues`);
  }
  getIssueById(id)
  {
    return this.httpClient.get(`${this.uri}/issues/${id}`);
  }
  addIssue(httptitle, responsible, description, severity)
  {
    const issue =
    {
      title: title,
      responsibl: responsible,
      description: description,
      severity : severity
    };
    return this.httpClient.post(`${this.url}/issues/add`, issue);
  }
  updateIssue(id, title, responsible, description, severity, status)
  {
    const issue =
    {
      title: title,
      responsibl: responsible,
      description: description,
      severity : severity,
      status: status
    };
    return this.httpClient.post(`${this.uri}/issues/update/${id}`, issue);
  }
  deleteIssue(id)
  {
    return this.httpClient.get(`${this.uri}/issues/delete/${id}`);
  }
}
