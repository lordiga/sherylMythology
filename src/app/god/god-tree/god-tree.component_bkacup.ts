import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as go from 'gojs';
import {DiagramComponent} from 'gojs-angular';

@Component({
  selector: 'god-tree',
  templateUrl: './god-tree.component.html',
  styleUrls: ['./god-tree.component.css']
})
export class GodTreeComponent implements OnInit, AfterViewInit  {
  name = 'Angular';

  @ViewChild(DiagramComponent, {static: false}) diagramComponent: DiagramComponent;

  familyData = [
    { key: 0, name: 'George V', gender: 'M', birthYear: '1865', deathYear: '1936', reign: '1910-1936' },
    { key: 1, parent: 0, name: 'Edward VIII', gender: 'M', birthYear: '1894', deathYear: '1972', reign: '1936' },
    { key: 2, parent: 0, name: 'George VI', gender: 'M', birthYear: '1895', deathYear: '1952', reign: '1936-1952' },
    { key: 7, parent: 2, name: 'Elizabeth II', gender: 'F', birthYear: '1926', reign: '1952-' },
    { key: 16, parent: 7, name: 'Charles, Prince of Wales', gender: 'M', birthYear: '1948' },
    { key: 38, parent: 16, name: 'Prince William', gender: 'M', birthYear: '1982' },
    { key: 39, parent: 16, name: 'Prince Harry of Wales', gender: 'M', birthYear: '1984' },
    { key: 17, parent: 7, name: 'Anne, Princess Royal', gender: 'F', birthYear: '1950' },
    { key: 40, parent: 17, name: 'Peter Phillips', gender: 'M', birthYear: '1977' },
    { key: 82, parent: 40, name: 'Savannah Phillips', gender: 'F', birthYear: '2010' },
    { key: 41, parent: 17, name: 'Zara Phillips', gender: 'F', birthYear: '1981' },
    { key: 18, parent: 7, name: 'Prince Andrew', gender: 'M', birthYear: '1960' },
    { key: 42, parent: 18, name: 'Princess Beatrice of York', gender: 'F', birthYear: '1988' },
    { key: 43, parent: 18, name: 'Princess Eugenie of York', gender: 'F', birthYear: '1990' },
    { key: 19, parent: 7, name: 'Prince Edward', gender: 'M', birthYear: '1964' },
    { key: 44, parent: 19, name: 'Lady Louise Windsor', gender: 'F', birthYear: '2003' },
    { key: 45, parent: 19, name: 'James, Viscount Severn', gender: 'M', birthYear: '2007' },
    { key: 8, parent: 2, name: 'Princess Margaret', gender: 'F', birthYear: '1930', deathYear: '2002' },
    { key: 20, parent: 8, name: 'David Armstrong-Jones', gender: 'M', birthYear: '1961' },
    { key: 21, parent: 8, name: 'Lady Sarah Chatto', gender: 'F', birthYear: '1964' },
    { key: 46, parent: 21, name: 'Samuel Chatto', gender: 'M', birthYear: '1996' },
    { key: 47, parent: 21, name: 'Arthur Chatto', gender: 'M', birthYear: '1999' },
    { key: 3, parent: 0, name: 'Mary, Princess Royal', gender: 'F', birthYear: '1897', deathYear: '1965' },
    { key: 9, parent: 3, name: 'George Lascelles', gender: 'M', birthYear: '1923', deathYear: '2011' },
    { key: 22, parent: 9, name: 'David Lascelles', gender: 'M', birthYear: '1950' },
    { key: 48, parent: 22, name: 'Emily Shard', gender: 'F', birthYear: '1975' },
    { key: 49, parent: 22, name: 'Benjamin Lascelles', gender: 'M', birthYear: '1978' },
    { key: 50, parent: 22, name: 'Alexander Lascelles', gender: 'M', birthYear: '1980' },
    { key: 51, parent: 22, name: 'Edward Lascelles', gender: 'M', birthYear: '1982' },
    { key: 23, parent: 9, name: 'James Lascelles', gender: 'M', birthYear: '1953' },
    { key: 52, parent: 23, name: 'Sophie Lascelles', gender: 'F', birthYear: '1973' },
    { key: 53, parent: 23, name: 'Rowan Lascelles', gender: 'M', birthYear: '1977' },
    { key: 54, parent: 23, name: 'Tanit Lascelles', gender: 'F', birthYear: '1981' },
    { key: 55, parent: 23, name: 'Tewa Lascelles', gender: 'M', birthYear: '1985' },
    { key: 24, parent: 9, name: 'Jeremy Lascelles', gender: 'M', birthYear: '1955' },
    { key: 56, parent: 24, name: 'Thomas Lascelles', gender: 'M', birthYear: '1982' },
    { key: 57, parent: 24, name: 'Ellen Lascelles', gender: 'F', birthYear: '1984' },
    { key: 58, parent: 24, name: 'Amy Lascelles', gender: 'F', birthYear: '1986' },
    { key: 59, parent: 24, name: 'Tallulah Lascelles', gender: 'F', birthYear: '2005' },
    { key: 25, parent: 9, name: 'Mark Lascelles', gender: 'M', birthYear: '1964' },
    { key: 60, parent: 25, name: 'Charlotte Lascelles', gender: 'F', birthYear: '1996' },
    { key: 61, parent: 25, name: 'Imogen Lascelles', gender: 'F', birthYear: '1998' },
    { key: 62, parent: 25, name: 'Miranda Lascelles', gender: 'F', birthYear: '2000' },
    { key: 10, parent: 3, name: 'Gerald Lascelles', gender: 'M', birthYear: '1924', deathYear: '1998' },
    { key: 26, parent: 10, name: 'Henry Lascelles', gender: 'M', birthYear: '1953' },
    { key: 63, parent: 26, name: 'Maximilian Lascelles', gender: 'M', birthYear: '1991' },
    { key: 27, parent: 10, name: 'Martin David Lascelles', gender: 'M', birthYear: '1962' },
    { key: 64, parent: 27, name: 'Alexander Lascelles', gender: 'M', birthYear: '2002' },
  ];

  public diagramDivClassName = 'myDiagramDiv';
  public diagramModelData = { prop: 'value', color: 'red' };

  public dia: any;

  @ViewChild('myDiag', {static: false}) myDiag: DiagramComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const $ = go.GraphObject.make;
    const appComp: GodTreeComponent = this;
    this.myDiag.diagram.nodeTemplate.contextMenu = 
      $('ContextMenu', 
        $('ContextMenuButton', 
          $(go.TextBlock, 'Working Button 1'),
          {
            click: (e, obj) => {
              console.log('e: ', e.diagram.model.modelData['color']);
              // this.buttonCallback(e, obj);  // not calling; buttonCallback is not a function error
            }
          }
        ),
        $('ContextMenuButton',
          $(go.TextBlock, 'Not Working Button 2'),
          {
            click: (e, obj) => {
              appComp.buttonCallback(e, obj);
            }
          }
        )
      );
  }

  initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, {
      'toolManager.hoverDelay': 100,  // 100 milliseconds instead of the default 850
      allowCopy: false,
      layout:  // create a TreeLayout for the family tree
        $(go.TreeLayout,
          { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
    });

    const bluegrad = '#90CAF9';
    const pinkgrad = '#F48FB1';

    dia.add(
      $(go.Part, 'Table', { position: new go.Point(300, 10), selectable: false },
        $(go.TextBlock, 'Key', {row: 0, font: '700 14px Droid Serif, sans-serif'}),
        $(go.Panel, 'Horizontal', {row: 1, alignment: go.Spot.Left},
          $(go.Shape, 'Rectangle', {desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5}),
          $(go.TextBlock, 'Males', {font: '700 13px Droid Serif, sans-serif'})),
        $(go.Panel, 'Horizontal', {row: 2, alignment: go.Spot.Left},
          $(go.Shape, 'Rectangle', {desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5}),
          $(go.TextBlock, 'Female', {font: '700 13px Droid Serif, sans-serif'})
        )
      )
    );

    dia.nodeTemplate = $(go.Node, 'Auto', {
      deletable: false
    }, new go.Binding('text', 'name'),
      $(go.Shape, 'Rectangle', {
        fill: 'lightgray',
        stroke: null,
        strokeWidth: 0,
        stretch: go.GraphObject.Fill,
        alignment: go.Spot.Center
      }, new go.Binding('fill', 'gender', (gender) => {
        if (gender === 'M') { return bluegrad; }
        if (gender === 'F') { return pinkgrad; }
        return 'orange';
      })),
      $(go.TextBlock, {
        font: '700 12px Droid Serif, sans-serif',
        textAlign: 'center',
        margin: 10, maxSize: new go.Size(80, NaN)
      }, new go.Binding('text', 'name'))
      );

    dia.linkTemplate = $(go.Link, {
      routing: go.Link.Orthogonal,
      corner: 5,
      selectable: false
    }, $(go.Shape, {
      strokeWidth: 3,
      stroke: '#424242'
    }));
     
    dia.model = new go.TreeModel(this.familyData);
    this.dia = dia;
    return dia;
  }

  buttonCallback(e:any, obj:any) {
    console.log('e2: ', e.diagram.model.modelData.color);
    console.log('this: ', this.name);
  }

  onModelChange($event:any) {
    console.log('Event: ', $event);
  }
}
