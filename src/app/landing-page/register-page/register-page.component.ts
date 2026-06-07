import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-register-page',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent, FormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public checked = false;
}
