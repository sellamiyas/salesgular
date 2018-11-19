import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
            // {
            //     path: 'components',
            //     loadChildren:
            //         './material-components/material-components.module#MaterialComponentsModule'
            // } 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
