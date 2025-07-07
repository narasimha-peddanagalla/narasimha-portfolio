import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedText', { static: true }) typedText!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const options = {
      strings: ['Aspiring Developer', 'Problem Solver', 'Quick Learner'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    new Typed(this.typedText.nativeElement, options);
  }
  scrollToContact() {
  const element = document.getElementById('contact-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
  //   scrollToContact() {
  //   console.log("I'm inside the scrollToContact()");
  //   this.router.navigate(['/contact']).then(() => {
  //     setTimeout(() => {
  //       const element = document.getElementById('contact-section');
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }, 100);
  //   });
  // }
}
