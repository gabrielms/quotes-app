export class SettingsService {
  private alternativeBackground:boolean = false;

  setAlternativeBackground(isAlternative){
    this.alternativeBackground = isAlternative;
  }

  isAlternativeBackground(){
    return this.alternativeBackground;
  }
}