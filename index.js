import { Inicio } from './scenes/inicio.js';
import { Game } from './scenes/game.js';
import { Gameover } from './scenes/game-over.js';
import { Congratulations } from './scenes/congratulations';

const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 580,
    parent: "container",
    scene: [Inicio, Game, Gameover, Congratulations ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        } 
    },
}

var game = new Phaser.Game(config);