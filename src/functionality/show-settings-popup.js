import { settingsBtn, settings } from "../dom-elements/elements";
import { setToggleBlocksListener } from "./set-toggle-blocks-listener";
import { showSettingsMenu } from "./show-settings-menu";

export function showSettingsPopup() {
  settingsBtn.classList.toggle('settings-icon-active');
  settings.classList.toggle('setting-popup-active');
  showSettingsMenu();
  setToggleBlocksListener();

  document.addEventListener('click', function(e) {
  if(settings.classList.contains('setting-popup-active') &&
    e.target.closest('.settings-popup') === null &&
    e.target.closest('.settings-icon') === null){
    settingsBtn.classList.remove('settings-icon-active');
    settings.classList.remove('setting-popup-active');
  }});
}