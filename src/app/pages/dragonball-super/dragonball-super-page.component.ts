import {Component, computed, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';



@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  
  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 10000 },
    { id: 2, name: 'vegeta', power: 8000 },
    /* { id: 3, name: 'piccolo', power: 3000 },
  { id: 4, name: 'yamcha', power: 500 },*/
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });



  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
