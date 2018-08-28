import { ConfigInterface } from "./interfaces/ConfigInterface";
import { RectInterface } from "./interfaces/RectInterface";
export class Engine {

  private canvas: HTMLElement;

  constructor(private config: ConfigInterface) {
    this.setFrameInterval();
    this.setContainer(config.container);
  }

  setFrameInterval() {
    window.requestAnimationFrame = window.requestAnimationFrame
      || window.webkitRequestAnimationFrame
      // || window.mozRequestAnimationFrame
      || function (callback) {
          return window.setTimeout(callback, 17);
        };
  }



  /**
   * Find and set container
   * @param configContainer
   */
  setContainer(configContainer: RectInterface) {
    this.canvas = document.getElementById(configContainer.id);
    this.setConfigStyles(this.canvas, configContainer);
  }

  getContainer() {
    return this.canvas;
  }

  /**
   * Apply config styles to container
   * @param canvas
   * @param config
   */
  setConfigStyles(canvas: HTMLElement, config: RectInterface) {
    Object.keys(config.styles).map(key => canvas.style[key] = config.styles[key]);
  }

  render() {
    window.requestAnimationFrame(this.run.bind(this));
    console.log('render game objects');
  }

  /**
   * Run game
   */
  run() {
    this.render();
  }
}
