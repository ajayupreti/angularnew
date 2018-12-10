import { NgModule } from '@angular/core'
import { MatFormFieldModule, MatChipsModule } from '@angular/material'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

@NgModule({
        imports: [
                MatFormFieldModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatChipsModule
        ],
        exports: [
                MatFormFieldModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatChipsModule
        ]
})

export class AngularMatModule { }
