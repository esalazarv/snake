import { Engine } from './core/Engine';
import { Config } from './core/config/Config';

const config = new Config();
console.log(config);
const game = new Engine(config);
game.run();
