import { ConfigInterface } from "../interfaces/ConfigInterface";

export class Config implements ConfigInterface {
  container = {
    id: 'content',
    styles: {
      width: '800px',
      height: '800px',
      backgroundColor: 'black',
      overflow: 'hidden',
    }
  };
}
