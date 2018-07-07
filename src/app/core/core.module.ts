import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { BreakingPointsService } from './breaking-points/breaking-points.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, BreakingPointsService]
})
export class CoreModule {}
