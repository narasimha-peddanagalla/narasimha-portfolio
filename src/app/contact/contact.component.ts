import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  fromEmail: string = '';
  message: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  sendEmail() {
    if (!this.fromEmail || !this.message) {
      this.errorMessage = 'Please fill out both fields.';
      this.successMessage = '';
      return;
    }

    const serviceID = 'service_xf39l2d';
    const templateID = 'template_thcjuyj';
    const publicKey = '82r48YMghkw0Ik_xY';

    const templateParams = {
      from_email: this.fromEmail,
      message: this.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        this.fromEmail = '';
        this.message = '';
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        this.errorMessage = 'Something went wrong. Try again.';
        this.successMessage = '';
      });
  }
}
