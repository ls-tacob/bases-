import {Component, computed, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html'
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 10000 },
    { id: 2, name: 'vegeta', power: 8000 }
  ]);


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
}
