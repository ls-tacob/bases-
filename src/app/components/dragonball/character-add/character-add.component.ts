import {Component, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';
import {CharacterListComponent} from '../character-list/character-list.component';

@Component({
  selector: 'dragonball-character-add',
  imports: [CharacterListComponent],
  templateUrl: './character-add.component.html'
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 10000 },
    { id: 2, name: 'vegeta', power: 8000 },
    /* { id: 3, name: 'piccolo', power: 3000 },
  { id: 4, name: 'yamcha', power: 500 },*/
  ]);





  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    console.log({ newCharacter });

    //this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
