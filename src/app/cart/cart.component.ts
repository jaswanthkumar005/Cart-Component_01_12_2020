import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SafeHtmlPipe} from '../safe-html.pipe'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  cartContent = [
    {
      col1 : `<span class="Blue" style="color:blue;font-weight:bold;">Move</span><br>  <b>Inprogress</b>`,
      col2: `<span class="num">2</span><br/> products<br> 4 units`,
      col3: `Assigned to: Matrix store <br> 1 manager <br> Move Type:Repleinment <br> created by: Mar 15,2020,11:56 am`,
      col4:`Continue`

    },
    {
      col1 : `<span style="color:blue;font-weight:bold;">Move</span><br>  <b>Inprogress</b>`,
      col2: `<span class="num">2</span><br/> products<br> 4 units`,
      col3: `Assigned to: Matrix store <br> 1 manager <br> Move Type:Repleinment <br> created by: Mar 15,2020,11:56 am`,
      col4:`move`
    },
    {
      col1 : `<span style="color:blue;font-weight:bold;">Move</span><br><b> progress</b>`,
      col2: `<span class="num">2</span><br/> products<br> 4 units`,
      col3: `Assigned to: Matrix store <br> 1 manager <br> Move Type:Repleinment <br> created by: Mar 15,2020,11:56 am`,
      col4:`Continue`
    }
  ]
   parser = new DOMParser();
   len;


  constructor() { }

  ngOnInit() {
    console.log(this.cartContent.length);
    this.len = this.cartContent.length
  }
  domConvertor(doc){
    console.log(doc);
    console.dir(this.parser. parseFromString(doc, 'text/html').body);

   let doc1 =  this.parser. parseFromString(doc, 'text/html');
   return doc1.body;
  }

}
