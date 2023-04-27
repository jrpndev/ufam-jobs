import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private backendUrl = 'http://localhost:3001/send';

  constructor(private http: HttpClient, private s: DomSanitizer) { }


  generateCode(): string {
    const codeLength = 6;
    const allowedChars = '0123456789';
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      code += allowedChars[randomIndex];
    }
    return code;
  }

  sendEmail(to: string, from: string, subject: string, username: string, code: string) {
    const body = {
      to: to,
      from: from,
      subject: subject,
      username: username,
      code: code
    };
    return this.http.post(this.backendUrl, body).subscribe(res => {
      console.log(res);
    })
  }
}
