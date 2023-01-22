import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class IssueService
{
  constructor(private http: HttpClient) {}

  getData() {
    return [
      {
        name: 'Mahul',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      }
    ]
  }
}
// import { HttpClient } from '@angular/common/http'
// // import { issue } from '../../../backend/Models/issue.js';
// @Injectable({
//   providedIn: 'root'
// })
// export class IssueService {

//   uri = 'http://localhost:4000';

//   constructor(private httpClient: HttpClient) { }
// }

//   getIssues()
//   {
//     return this.httpClient.get(`${this.uri}/issue`);
//   }
//   getIssueById(id)
//   {
//     return this.httpClient.get(`${this.uri}/issue/${id}`);
//   }
//   addIssue(title, responsible, description, severity)
//   {
//     const issue =
//     {
//       title: title,
//       responsibl: responsible,
//       description: description,
//       severity : severity
//     };
//     return this.httpClient.post(`${this.url}/issue/add`, issue);
//   }
//   updateIssue(id, title, responsible, description, severity, status)
//   {
//     const issue =
//     {
//       title: title,
//       responsibl: responsible,
//       description: description,
//       severity : severity,
//       status: status
//     };
//     return this.httpClient.post(`${this.uri}/issue/update/${id}`, issue);
//   }
//   deleteIssue(id)
//   {
//     return this.httpClient.get(`${this.uri}/issue/delete/${id}`);
//   }
// }
