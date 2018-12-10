import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html'
})

export class ListDetailComponent implements OnInit {
    @Input() dataPassed;

    constructor(
        private activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        console.log(this.dataPassed)
    }

    closeModal() {
        this.activeModal.close()
    }
}