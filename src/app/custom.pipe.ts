import { Pipe, PipeTransform } from '@angular/core';

@Pipe

({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number,secondNum:number): number {
    
       
    return value % secondNum ;
  }

}
