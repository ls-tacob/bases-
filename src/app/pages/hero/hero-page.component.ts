import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';


@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {
  name =  signal('Ironman');
  age = signal(45);

heroDescription = computed(  () => {
   const desc = `${this.name()} - ${this.age()}`
    return desc;
  }
)
  capitalizeName = computed(  () => {
    const cap = `${this.name().toUpperCase()}`
    return cap;
  })
  changeHero(){
  this.name.set('spiderman');
  this.age.set(22);
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge(){
    this.age.set(60);
  }
  capitalName = computed(() =>   this.name().toUpperCase()  )


}
