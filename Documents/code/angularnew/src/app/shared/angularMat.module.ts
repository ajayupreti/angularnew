import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatTooltipModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule, MatStepperModule, MatIconModule, MatTabsModule, MatCheckboxModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule } from '@angular/material'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
        imports: [
                MatFormFieldModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatInputModule,
                MatTooltipModule,
                MatProgressSpinnerModule,
                MatSelectModule,
                MatOptionModule,
                MatStepperModule,
                MatIconModule,
                MatDialogModule,
                MatTabsModule,
                MatCheckboxModule,
                MatExpansionModule,
                MatRadioModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatChipsModule
        ],
        exports: [
                MatFormFieldModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatInputModule,
                MatTooltipModule,
                MatProgressSpinnerModule,
                MatSelectModule,
                MatOptionModule,
                MatStepperModule,
                MatIconModule,
                MatDialogModule,
                MatTabsModule,
                MatCheckboxModule,
                MatExpansionModule,
                MatRadioModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatChipsModule
        ]
})

export class AngularMatModule { }
