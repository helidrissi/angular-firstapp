import { Directive, ElementRef,HostListener,Input } from '@angular/core';
  
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

 private InitialColor: string='#f5f5f5';
 private DefaultColor: string ='#009688';
 private DefaultHeight:number =180;



    constructor(private el: ElementRef) {
        this.setBorder(this.InitialColor);
        this.setHeight(this.DefaultHeight);
    }
    @Input('pkmnBorderCard') BorderColor:string;

    @HostListener('mouseenter') onMouseEnter(){

        this.setBorder(this.BorderColor || this.DefaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){

        this.setBorder('#f5f5f5');
    }

  
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}