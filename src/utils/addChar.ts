export const addChar = (text: string, interval: number, char: '/' | ' ') => 
  text.match(new RegExp(`.{1,${interval}}`, 'g'))!.join(char); 
//Esse Regex adiciona um espaço ou / a cada intervalo