import {
  LitElement,
  html,
  css,
  customElement,
  TemplateResult,
} from "lit-element";
import "@spectrum-web-components/status-light/sp-status-light.js";
import '@spectrum-web-components/badge/sp-badge.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js';


@customElement("statuslight-and-badge")
export default class StatuslightAndBadge extends LitElement {
  static styles = [
    css`
      :host {

      }
      .fieldset {
        display: flex;
        margin: 8px;
        flex-direction: column;
      }
      .fieldset p {
        padding: 0;
        margin:0;
      }
      .badges p {
        margin-bottom: 10px;
      }
    `,
  ];

  protected render(): TemplateResult {
    return html`
    <div class="fieldset">
      <h4>Statuses</h4>
      <p>
        <sp-status-light variant="positive" disabled>
          positive status light
        </sp-status-light>
      </p>
      <p>
        <sp-status-light variant="neutral" disabled>
          disabled status light
        </sp-status-light>
      </p>
      <p>
        <sp-status-light variant="negative">
          negative status light
        </sp-status-light>
      </p>
      <p>
        <sp-status-light variant="info">
          informative status light
        </sp-status-light>
      </p>
      <p>
        <sp-status-light variant="notice">
          notice status light
        </sp-status-light>
      </p>
    </div>
    <div class="fieldset">
        <h4>Colours</h4>
        <p>
          <sp-status-light variant="magenta">
            magenta status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="fuchsia">
            fuchsia status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="purple">
            purple status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="indigo">
            indigo status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="seafoam">
            seafoam status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="celery">
            celery status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="chartreuse">
            chartreuse status light
          </sp-status-light>
        </p>
        <p>
          <sp-status-light variant="yellow">
            yellow status light
          </sp-status-light>
        </p>
    </div>
    <div class="fieldset">
      <h4>Badges- Sizes</h4>
      <div class="badges">
          <p><sp-badge size="s">Label</sp-badge></p>
          <p><sp-badge size="s"><sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>Icon and label</sp-badge></p>
      </div>
      <div class="badges">
          <p><sp-badge size="m">Label</sp-badge></p>
          <p><sp-badge size="m"><sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>Icon and label</sp-badge></p>
      </div>
      <div class="badges">
          <p><sp-badge size="l">Label</sp-badge></p>
          <p><sp-badge size="l"><sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>Icon and label</sp-badge></p>
      </div>
      <div class="badges">
          <p><sp-badge size="xl">Label</sp-badge></p>
          <p><sp-badge size="xl"><sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>Icon and label</sp-badge></p>
      </div>

      <h4>Semantic Badges</h4>
      <div class="badges">    
          <p><sp-badge variant="neutral">Neutral</sp-badge></p>
          <p><sp-badge variant="informative">Informative</sp-badge></p>
          <p><sp-badge variant="positive">Positive</sp-badge></p>
          <p><sp-badge variant="negative">Negative</sp-badge></p>
      </div>
      <h4>Non-semantic</h4>
      <div class="badges">
          <p><sp-badge variant="seafoam" static="black" style="--mod-badge-background-color-default: var(--spectrum-seafoam-background-color-default)">Seafoam</sp-badge></p>
          <p><sp-badge variant="indigo" static="black" style="--mod-badge-background-color-default: var(--spectrum-indigo-background-color-default)">Indigo</sp-badge></p>
          <p><sp-badge variant="purple" static="black" style="--mod-badge-background-color-default: var(--spectrum-purple-background-color-default)">Purple</sp-badge></p>
          <p><sp-badge variant="fuchsia" static="black" style="--mod-badge-background-color-default: var(--spectrum-fuchsia-background-color-default)">Fuchsia</sp-badge></p>
          <p><sp-badge variant="magenta" static="black" style="--mod-badge-background-color-default: var(--spectrum-magenta-background-color-default)">Magenta</sp-badge></p>
          <p><sp-badge variant="yellow" static="black" style="--mod-badge-background-color-default: var(--spectrum-yellow-background-color-default); --mod-badge-label-icon-color-white: var(--spectrum-black);">Yellow</sp-badge></p>
      </div>
    </div>
    `;
  }
}
