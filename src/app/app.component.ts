import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  edges: any;
  nodes: any;
  data: any;
  test: any;
  test1: any;
  index: any;
  array = [];
  ngOnInit() {
    this.httpClient
      .get('../assets/data/1-simple-process.json')
      .subscribe((res) => {
        this.data = res;
        this.edges = this.data.edges;
        this.nodes = this.data.nodes;
        console.log(this.data.edges);

        for (let i = 0; i < this.nodes.length; i++) {
          if (this.nodes[i].type === 'ServiceTask') {
            this.index = this.nodes[i].id;
            console.log(this.index);
          }
        }
        this.test = this.nodes.filter(
          (node: any) => node.type !== 'ServiceTask'
        );

        this.test1 = this.edges.filter((ed: any) => ed.from !== this.index);
        this.get();
      });
  }
  get() {
    console.log(this.test1);
    console.log(this.index.length);

    console.log(this.test);
  }
}
