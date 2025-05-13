import {Component, computed, signal} from '@angular/core';
import {NgClass} from '@angular/common';

interface Character{
  id: number;
  name: string;
  power: number;

}

@Component({
  templateUrl: './dragonball-page.component.html'
})

export class DragonballPageComponent {


characters = signal<Character[]>([
  { id: 1, name: 'goku', power: 10000 },
  { id: 2, name: 'vegeta', power: 8000 },
  { id: 3, name: 'piccolo', power: 3000 },
  { id: 4, name: 'yamcha', power: 500 },
]);

powerClasses = computed( ()=> {
  return {
    'text-danger' : true,
  }
})


  name = signal('gohan');
  power = signal(2000);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
      const newCharacter: Character = {
        id: this.characters().length +1,
        name: this.name(),
        power: this.power(),
      };

    this.characters.update((list) => [ ...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
