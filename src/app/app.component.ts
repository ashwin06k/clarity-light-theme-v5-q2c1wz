import { Component, OnInit, VERSION } from '@angular/core';
import {Item} from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  
  list: Item[] = [];

  ngOnInit(): void {
  
      this.list = [new Item('Product 1', 'Release 1'),
          new Item('Product 2', 'Release 2'),
          new Item('Product 3', 'Release 3'),
          new Item('Product 4', 'Release 4'),
          new Item('Product 5', 'Release 5'),
          new Item('Product 6', 'Release 6'),
          new Item('Product 7', 'Release 7'),
          new Item('Product 8', 'Release 8'),
          new Item('Product 9', 'Release 9'),
          new Item('Product 10', 'Release 10'),
          new Item('Product 11', 'Release 11'),
          new Item('Product 12', 'Release 12'),
          new Item('Product 13', 'Release 13'),
          new Item('Product 14', 'Release 14'),
          new Item('Product 15', 'Release 15')];
  }
}
