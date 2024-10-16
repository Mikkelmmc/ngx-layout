import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { GroupRoute, SidebarFooter, SidebarRoute } from "../../interfaces";
import { TopbarComponent } from "../topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { ThemeService } from "../../theme.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "ngx-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["../../assets/styles.css"],
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    LoadingComponent,
    CommonModule,
    RouterOutlet,
  ],
})
export class LayoutComponent {
  @Input() renderApp: any = true;
  @Input() loading?: any = false;
  @Input() showTopbar?: any = true;
  @Input() logo?: string = "/assets/logo.png";
  @Input() groupRoutes: GroupRoute[] = [];
  @Input() extraRoutes: SidebarRoute[] = [];
  @Input() sidebarFooter?: SidebarFooter;
  @Input() topbarHeight: number = 60;
  @Input() sidebarHide?: any = false;

  @Output() sidebarFooterOnClick = new EventEmitter<void>();

  @ContentChild("topbar") topbarTemplate!: TemplateRef<any>;

  constructor(private themeService: ThemeService) {}

  footerClick() {
    this.sidebarFooterOnClick.emit();
  }
}
