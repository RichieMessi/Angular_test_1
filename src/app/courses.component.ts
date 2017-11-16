
import { Component } from '@angular/core'
import { CourseService } from './courses.service';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

@Component({
    selector: 'courses',   // <courses>
    // template: '<h2>{{"Title: " +  getTitle() }}</h2>'
    // template: '<h2>{{"Title: " +  title }}</h2>'
    template: `
    <h1>{{ heading  }}</h1>
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
        </ul>

        <br>
        <hr>
        <h3>I am a break</h3>

        <table>
            <tr>
                <td [attr.colspan]="colSpan"><>td>
            </tr>
        </table>


        <button class="btn btn-success" [class.active]="isActive"  >Class Binding</button><br><br>

        <button [style.backgroundColor]="isActive ? 'pink' : 'lightblue'">Style Binding</button><br><br>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Click Event</button>
        </div>
        <br><br>
        <input (keyup.enter)="onKeyUp()" />


        <br><br>
        
        <input [(ngModel)]="email" (keyup.enter)="getFields()" /><br/><br/><br/>

        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.rating | number:'1.3-3'}} <br/>
        {{ course.students  | number}} <br/>
        {{ course.price | currency:'AUD:false'}} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
        {{ text | summary: 10}}

        `
})

export class CoursesComponent {

    text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    course = {
        title: "My favourite laptop is mine",
        rating: 4.234,
        students: 385333200,
        price: 189.33,
        releaseDate: new Date(2016, 3, 3)
    }

    title = 'List of courses'
    // courses = ['course1', 'course2', 'course3', 'course4', 'course5'];

    courses;
    colSpan = 24
    isActive = false;

    // getFields($event) {
    //     console.warn($event.target.value);
    // }
    email = "meee@example.com"
    getFields() {
        console.warn(this.email);
    }

    onDivClicked() {
        console.warn('Div was clicked..')
    }

    onSave($event) {
        $event.stopPropagation()
        console.warn('Click Event Working...' , $event)
    }

    onKeyUp($event) {
        // if ($event.keyCode === 13)
         console.warn('Enter was pressed');
    }
    
    constructor(service: CourseService) {
        // let service = new CourseService();
        this.courses = service.getCourses();

    }


    // getTitle() {
    //     return this.title;
    // }

}