import { Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
CurrentSrc:string="";
isClicked:boolean=false;

showImg(myImg:HTMLHeadingElement):void
{
  this.isClicked=true;
  this.CurrentSrc = myImg.getAttribute("src")!;
}
closeContainer():void
{
  this.isClicked=false;
}
}
