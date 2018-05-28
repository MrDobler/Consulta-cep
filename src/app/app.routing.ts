import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const APP_ROUTES: Routes = [
    { path: '', component: MainComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
