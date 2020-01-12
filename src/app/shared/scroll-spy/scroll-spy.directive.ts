import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        const halfContainerSize = $(event.target).height()/2;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= (scrollTop + halfContainerSize)) {
                    currentSection = element.id;
                }
            } 
        }
        if (currentSection !== this.currentSection) {
            if(currentSection === undefined || currentSection === "capcaleraExamen"){
                this.currentSection = children[1].id;
            } else {
                this.currentSection = currentSection;
            }
            this.sectionChange.emit(this.currentSection);
        }
    }

}