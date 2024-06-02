import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "../shared/ui/components/layout/layout.component";
import { HeaderComponent } from "../shared/ui/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LayoutComponent, HeaderComponent]
})
export class AppComponent {
  title = 'Taskana';
}
