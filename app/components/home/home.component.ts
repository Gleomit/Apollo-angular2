import {Component} from 'angular2/core';
import {SampleDirective} from '../../directives/sample.directive'

@Component({
  templateUrl:  'app/components/home/home.component.html',
  styleUrls:    ['app/components/home/home.component.css'],
  directives:   [SampleDirective]
})
export class HomeComponent { }