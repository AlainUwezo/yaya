import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedPrivateModule } from './shared-private/shared-private.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AuthModule,
    DashboardModule,
    SharedPrivateModule,
  ]
})
export class PrivateModule { }
