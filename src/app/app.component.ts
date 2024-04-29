import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structural-directives-demo';
  num: number = 0;
  isEvenOdd(): boolean{
    return this.num % 2 == 0;
  }

  fruits: string[] = ["Apple", "Kiwi", "Oranges", "Banana"];
  newFruitValue: string = "";
  addFruit(){

    this.fruits.push(this.newFruitValue)

  }

  selectedColor: string = "red";
  setColor(event: Event){
    const target = event.target as HTMLSelectElement;
    this.selectedColor = target.value;
  }


}
