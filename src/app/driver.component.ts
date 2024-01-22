import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from './klasa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent {
  @Input()
  vozac: Driver = {} as Driver;

  @Input()
  reden: Number = 0;

  @Output()
  cuci = new EventEmitter<any>();
  klasaDiv() {
    return { klasaZaDiv: true };
  }
  klasi() {
    return { poz: true, 'course-card': true };
  }
  stilSLika() {
    return { position: 'relative', width: '100%' };
  }
  styles() {
    if (this.vozac.category == 'beginner')
      return {
        'background-color': 'green',
        border: 'solid green 4px',
        'margin-top': '30px',
        'margin-bottom': '30px',
        postion: 'relative',
        width: '50%',
      };
    else
      return {
        'background-color': 'red',
        border: 'solid red 4px',
        'margin-top': '30px',
        'margin-bottom': '30px',
        postion: 'relative',
        width: '50%',
      };
  }
  styles2() {
    if (this.vozac.team == 'Mercedes AMG Petronas') {
      return {
        border: '10px solid black',
        'font-size': '15px',
        display: 'flex',
        'justify-content': 'center',
      };
    } else {
      return {
        border: '10px solid yellow',
        'font-size': '15px',
        display: 'flex',
        'justify-content': 'center',
      };
    }
  }
  styles3() {
    if (this.vozac.points > 400) {
      return { 'font size': '20px', 'font-weight': 'bold', color: 'gold' };
    } else return { 'font-weight': 'lighter' };
  }
  klik() {
    var link = this.vozac.iconUrl;
    window.open(link, '_blank');
    this.cuci.emit(this.vozac);
  }
}
