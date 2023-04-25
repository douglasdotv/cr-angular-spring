import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app',
})
export class AppPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'Pajala Sunrise':
        return 'local_drink';
      case 'Poland':
        return 'flight_land';
    }
    return 'sports_soccer';
  }
}
