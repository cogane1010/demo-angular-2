import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { DemoRoutes } from './+demo/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...DemoRoutes,
  ...AboutRoutes
];
