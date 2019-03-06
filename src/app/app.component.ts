import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp1-blog-oc';
  listPost : Array<Post> = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at posuere ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nisi lorem, fringilla sit amet mi sed, gravida malesuada neque. Duis nibh nunc, rutrum eget sapien rutrum, facilisis sollicitudin magna.",0),
    new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at posuere ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nisi lorem, fringilla sit amet mi sed, gravida malesuada neque. Duis nibh nunc, rutrum eget sapien rutrum, facilisis sollicitudin magna.",0),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at posuere ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nisi lorem, fringilla sit amet mi sed, gravida malesuada neque. Duis nibh nunc, rutrum eget sapien rutrum, facilisis sollicitudin magna.",0)
  ];
}
