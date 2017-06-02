import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ICONS } from './icons';
import SETTINGS from '../../app/app-settings';

/**
 * Generated class for the SelectIconComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'select-icon',
  templateUrl: 'select-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectIconComponent {
  @Input()
  public selectedIcon: string;

  @Output()
  public onSelectIcon: EventEmitter<string> = new EventEmitter();

  public icons = ICONS;

  public iconsPath = SETTINGS.ICONS.PATH;
}
