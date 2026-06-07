import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-landing-page-content',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent, IgcFormsModule, FormsModule],
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageContentComponent {
  public battleRoyaleBenefitsSelectedItem?: string;
  public borderDefenseBenefitsSelectedItem?: string;
  public festivalWarfareBenefitsSelectedItem?: string;
  public squadSurvivalBenefitsSelectedItem?: string;
  public ngModel = 5;
  public ngModel1 = 4;
  public ngModel2 = 5;
}
