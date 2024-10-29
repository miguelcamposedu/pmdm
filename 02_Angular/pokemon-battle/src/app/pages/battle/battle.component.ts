import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {
  // TURN possible values: 1, 2
  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;

  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      // Apply damage to Pokemon 2

      this.pokemonTurn = 2;
    } else {
      // Apply damage to Pokemon 1

      this.pokemonTurn = 1;
    }
  }
}
