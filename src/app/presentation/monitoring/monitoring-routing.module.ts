import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MonitoringFiltersComponent } from "./monitoring-filters/monitoring-filters.component";

const routes = [
    { path: '', component: MonitoringFiltersComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MonitoringRoutingModule {}