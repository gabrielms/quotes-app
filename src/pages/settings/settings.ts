import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(
    private settingsService: SettingsService){
  }
  onToggle(toggle: Toggle){
    this.settingsService.setAlternativeBackground(toggle.checked);
  }

  checkAlternativeBackground(){
    return this.settingsService.isAlternativeBackground();
  }

}
