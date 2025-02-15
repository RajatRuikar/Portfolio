import { Component, inject, PLATFORM_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button 
      (click)="toggleTheme()"
      class="theme-toggle"
      [class.dark]="isDarkMode"
      aria-label="Toggle theme">
    </button>
  `
})
export class ThemeToggleComponent {
  private platformId = inject(PLATFORM_ID);
  isDarkMode = true;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent],
  template: `
    <header class="bg-white/80 dark:bg-gray-800/80 shadow-sm sticky top-0 z-50 backdrop-blur-sm transition-colors duration-200">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold text-blue-600 dark:text-blue-400">Portfolio</h1>
        <div class="flex items-center space-x-6">
          <a href="#about" class="nav-link text-sm">About</a>
          <a href="#experience" class="nav-link text-sm">Experience</a>
          <a href="#projects" class="nav-link text-sm">Projects</a>
          <a href="#contact" class="nav-link text-sm">Contact</a>
          <app-theme-toggle></app-theme-toggle>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="min-h-screen flex items-center animate-gradient text-white transition-colors duration-200">
      <div class="section-container text-center">
        <div class="animate-fade-in">
          <h1 class="text-6xl font-bold mb-4 animate-float">Rajat Ruikar</h1>
          <h2 class="text-4xl font-bold mb-6">Software Engineer</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Seeking a challenging opportunity to leverage my technical skills, contribute to innovative projects, 
            and continue to grow in a dynamic and forward-thinking environment.
          </p>
          <a href="#contact" class="primary-button inline-block hover:scale-105 transition-transform">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section-container">
      <h2 class="section-title">About Me</h2>
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="animate-slide-in animate-delay-100">
            <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Programming Languages</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">C/C++</span>
                  <span class="skill-tag">Java</span>
                  <span class="skill-tag">C#</span>
                  <span class="skill-tag">TypeScript</span>
                </div>
              </div>
              <div>
                <h4 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Frameworks</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">Spring Boot</span>
                  <span class="skill-tag">Hibernate</span>
                  <span class="skill-tag">.NET</span>
                </div>
              </div>
              <div>
                <h4 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Databases</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">Oracle</span>
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">Firebase</span>
                  <span class="skill-tag">MongoDB</span>
                </div>
              </div>
              <div>
                <h4 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Web Development</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">AngularJS</span>
                  <span class="skill-tag">HTML/CSS</span>
                  <span class="skill-tag">Bootstrap</span>
                  <span class="skill-tag">Node.js</span>
                </div>
              </div>
            </div>
          </div>
          <div class="animate-slide-in animate-delay-200">
            <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Education</h3>
            <div class="space-y-6">
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">Master of Computer Applications (MCA)</h4>
                <p class="text-gray-600 dark:text-gray-400">Vishwakarma Institute of Technology (VIT), Pune</p>
                <p class="text-gray-500 dark:text-gray-500 mt-2">Oct 2021 - May 2023 | CGPA: 8.22</p>
              </div>
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">Bachelor of Computer Applications (BCA)</h4>
                <p class="text-gray-600 dark:text-gray-400">MIT Arts, Commerce & Science College (MIT), Pune</p>
                <p class="text-gray-500 dark:text-gray-500 mt-2">Jun 2018 - Aug 2021 | CGPA: 8.21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div class="section-container">
        <h2 class="section-title">Work Experience</h2>
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md animate-fade-in animate-delay-100 project-card">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Software Engineer</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 mt-1">Go-Live Faster</p>
              </div>
              <span class="text-gray-500 dark:text-gray-400 font-medium">Oct 2024 - Present</span>
            </div>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
              <li>Develop and maintain applications using Java, Java Swing, and Spring Boot</li>
              <li>Perform validation of payment messages for various protocols</li>
              <li>Design and implement validation rules for payment processing</li>
              <li>Contribute to back-end development for payment systems integration</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md animate-fade-in animate-delay-200 project-card">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Software Engineer Intern</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 mt-1">Duck Creek Technologies</p>
              </div>
              <span class="text-gray-500 dark:text-gray-400 font-medium">Jan 2023 - Jun 2023</span>
            </div>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
              <li>Developed and deployed On Demand Control Hub (ODCH) projects</li>
              <li>Focused on API generation, debugging, and UI design</li>
              <li>Enhanced user experience and system integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section-container">
      <h2 class="section-title">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-fade-in animate-delay-100">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" 
                 alt="Revenue Generator" 
                 class="w-full h-full object-cover"/>
          </div>
          <div class="p-8">
            <h3 class="font-bold text-2xl mb-3 text-blue-600 dark:text-blue-400">Revenue Generator</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              A robust web application built with Java Spring Boot and Angular, featuring efficient data processing
              and RESTful API implementation.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="skill-tag">Java</span>
              <span class="skill-tag">Spring Boot</span>
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">MySQL</span>
            </div>
            <a href="https://github.com/RajatRuikar/RevenueGeneratorMain" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
        </div>

        <div class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-fade-in animate-delay-200">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1594179047519-f347310d3322?w=800&auto=format&fit=crop&q=60" 
                 alt="DCT Fast Food" 
                 class="w-full h-full object-cover"/>
          </div>
          <div class="p-8">
            <h3 class="font-bold text-2xl mb-3 text-blue-600 dark:text-blue-400">DCT Fast Food</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              A web-based fast food ordering system developed during internship, allowing users to conveniently
              order their favorite items.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">Firebase</span>
            </div>
            <a href="https://github.com/RajatRuikar/Food-Order" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
        </div>

        <div class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-fade-in animate-delay-300">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=60" 
                 alt="Hospital Manager" 
                 class="w-full h-full object-cover"/>
          </div>
          <div class="p-8">
            <h3 class="font-bold text-2xl mb-3 text-blue-600 dark:text-blue-400">Hospital Manager</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              A comprehensive Hospital Management System for managing hospital operations, including records
              of doctors, patients, staff, and medicine.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="skill-tag">Visual Basic 6.0</span>
            </div>
            <a href="https://github.com/RajatRuikar/Hospital-Manager" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
        </div>

        <div class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-fade-in animate-delay-300">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60" 
                 alt="RTO Management System" 
                 class="w-full h-full object-cover"/>
          </div>
          <div class="p-8">
            <h3 class="font-bold text-2xl mb-3 text-blue-600 dark:text-blue-400">RTO Management System</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              An RTO Management System for managing vehicle credentials, license holders, and user information
              for improved operational efficiency.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="skill-tag">VB.NET</span>
            </div>
            <a href="https://github.com/RajatRuikar/RTO-management-system" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
      });
    }
  }
}

@Component({
  selector: 'app-languages',
  standalone: true,
  template: `
    <section class="bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div class="section-container">
        <h2 class="section-title">Languages</h2>
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md animate-fade-in animate-delay-100">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">English</h3>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                Fluent
              </span>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md animate-fade-in animate-delay-200">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">Hindi</h3>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                Fluent
              </span>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md animate-fade-in animate-delay-300">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400">Marathi</h3>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                Fluent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class LanguagesComponent {}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div class="section-container">
        <h2 class="section-title">Get in Touch</h2>
        <div class="max-w-xl mx-auto animate-fade-in">
          <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
            <form (ngSubmit)="submitForm()" #contactForm="ngForm">
              <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 mb-2 font-semibold">Name</label>
                <input type="text" name="name" [(ngModel)]="formData.name" required class="form-input" placeholder="Your name">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 mb-2 font-semibold">Email</label>
                <input type="email" name="email" [(ngModel)]="formData.email" required class="form-input" placeholder="your.email@example.com">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-200 mb-2 font-semibold">Message</label>
                <textarea rows="4" name="message" [(ngModel)]="formData.message" required class="form-input" placeholder="Your message"></textarea>
              </div>
              <button type="submit" [disabled]="!contactForm.form.valid" class="primary-button w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    const mailtoLink = `mailto:rajat1ruikar@gmail.com?subject=Portfolio Contact from ${this.formData.name}&body=${this.formData.message}%0D%0A%0D%0AFrom: ${this.formData.name}%0D%0AEmail: ${this.formData.email}`;
    window.location.href = mailtoLink;
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="section-container">
        <div class="text-center space-y-6 animate-fade-in">
          <div class="flex justify-center space-x-8">
            <a href="https://github.com/rajatRuikar/" target="_blank" rel="noopener noreferrer" class="social-link">
              <span class="sr-only">GitHub</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rajat-ruikar-9a3043181/" target="_blank" rel="noopener noreferrer" class="social-link">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://drive.google.com/file/d/1X1bLARIgZZk5BXETRZ3CjoKQ6KVcgP2v/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="social-link flex items-center space-x-2">
              <span class="sr-only">Resume</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-500">© 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    LanguagesComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
    <app-projects></app-projects>
    <app-languages></app-languages>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class App {
  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }
}

bootstrapApplication(App);