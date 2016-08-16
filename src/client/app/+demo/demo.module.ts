import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';

@NgModule({
    imports: [CommonModule],
    declarations: [DemoComponent],
    exports: [DemoComponent],
    providers : [DemoService]
})

export class DemoModule { }