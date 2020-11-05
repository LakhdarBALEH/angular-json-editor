import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import { schema } from './schema.value';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// @ts-ignore
export class AppComponent {

  // @ts-ignore
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  options = new JsonEditorOptions();
  data = {
    products: [{
      name: 'car',
      product: [{
        name: 'honda',
        model: [
          { id: 'civic', name: 'civic' },
          { id: 'accord', name: 'accord' },
          { id: 'crv', name: 'crv' },
          { id: 'pilot', name: 'pilot' },
          { id: 'odyssey', name: 'odyssey' }
        ]
      }]
    }]
  };

  constructor() {
    this.options.mode = 'code';
    this.options.modes = ['code', 'text', 'tree', 'view'];
    this.options.schema = schema;
    this.options.statusBar = false;
    this.options.onChange = () => console.log(this.editor.get());
  }

}