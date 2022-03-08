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
    {"key":1, "name":"Uranus (Heaven)", "title":"Caelus"},
    {"key":2, "name":"Gaea (Earth)", "title":"Terra"},
    {"key":3, "name":"Cronus", "title":"Saturn", "parent":1},
    {"key":4, "name":"Rhea", "title":"Ops", "parent":1},
    {"key":5, "name":"Coeus", "title":"Polus", "parent":1},
    {"key":6, "name":"Phoebe", "title":" ", "parent":1},
    {"key":7, "name":"Ocean", "title":" ", "parent":1},
    {"key":8, "name":"Tethya", "title":" ", "parent":1},
    {"key":9, "name":"Hestia", "title":"Vesta", "parent":3},
    {"key":10, "name":"Hades", "title":"Pluto", "parent":3},
    {"key":11, "name":"Poseidon", "title":"Neptune", "parent":3},
    {"key":12, "name":"Zeus", "title":"Jupiter", "parent":3},
    {"key":13, "name":"Hera", "title":"Juno", "parent":3},
    {"key":14, "name":"Demeter", "title":"Ceres", "parent":3},
    {"key":15, "name":"Zeus", "title":"Jupiter", "parent":3},
    {"key":16, "name":"Zeus", "title":"Jupiter", "parent":5},
    {"key":17, "name":"Leto", "title":" ", "parent":5},
    {"key":18, "name":"Iapetus", "title":" ", "parent":7},
    {"key":19, "name":"Athena", "title":"Minerva", "parent":12},
    {"key":20, "name":"Ares", "title":"Mars", "parent":13},
    {"key":21, "name":"Hebe", "title":" ", "parent":13},
    {"key":22, "name":"Hephaestus", "title":"Vulcan", "parent":13},
    {"key":23, "name":"Persephone", "title":"Proserpine", "parent":14},
    {"key":24, "name":"Apollo", "title":"Apollo", "parent":5},
    {"key":25, "name":"Artmeis", "title":"Diana", "parent":5},
    {"key":26, "name":"Prometheus", "title":"", "parent":18},
    {"key":27, "name":"Atlas", "title":" ", "parent":18},
    {"key":28, "name":"Epimethues", "title":" ", "parent":18},
    {"key":29, "name":"Zeus", "title":"Jupiter", "parent":27},
    {"key":30, "name":"Maia", "title":" ", "parent":27},
    {"key":31, "name":"Zeus", "title":"Jupiter", "parent":28},
    {"key":32, "name":"Dione", "title":" ", "parent":28},
    {"key":33, "name":"Hermes", "title":"Mercury", "parent":27},
    {"key":34, "name":"Aphrodite", "title":" ", "parent":28},
    {"key":35, "name":"", "title":" ", "parent":21}
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
  }

  initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, 
      {
        maxSelectionCount: 1, // users can select only one part at a time
        validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
        "clickCreatingTool.archetypeNodeData": { // allow double-click in background to create a new node
          name: "(new person)",
          title: "",
          comments: ""
        },
        "clickCreatingTool.insertPart": function(loc:any) {  // override to scroll to the new node
          var node = go.ClickCreatingTool.prototype.insertPart.call(this, loc);
          if (node !== null) {
            //this.diagram.select(node);
            //this.diagram.commandHandler.scrollToPart(node);
            //this.diagram.commandHandler.editTextBlock(node.findObject("NAMETB"));
          }
          return node;
        },
        layout:
          $(go.TreeLayout,
            {
              treeStyle: go.TreeLayout.StyleLastParents,
              arrangement: go.TreeLayout.ArrangementHorizontal,
              // properties for most of the tree:
              angle: 90,
              layerSpacing: 35,
              // properties for the "last parents":
              alternateAngle: 90,
              alternateLayerSpacing: 35,
              alternateAlignment: go.TreeLayout.AlignmentBus,
              alternateNodeSpacing: 20
            }),
        "undoManager.isEnabled": true // enable undo & redo
      });
    var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB",
      "#008299", "#D24726", "#008A00", "#094AB2"];
      // This function provides a common style for most of the TextBlocks.
      // Some of these values may be overridden in a particular TextBlock.
      function textStyle() {
        return { font: "10pt  Segoe UI,sans-serif", stroke: "white" };
      }

      // This converter is used by the Picture.
      function findHeadShot(key:any) {
        if (key < 1 || key > 35) return "../../assets/god_icon/nopic.jpg"; // There are only 16 images on the server
        return "/sherylMythology/assets/god_icon/" + key + ".jpg"
      }
      // define the Node template
      dia.nodeTemplate =
        $(go.Node, "Auto",
          // for sorting, have the Node.text be the data.name
          new go.Binding("text", "name"),
          // bind the Part.layerName to control the Node's layer depending on whether it isSelected
          new go.Binding("layerName", "isSelected", sel => sel ? "Foreground" : "").ofObject(),
          // define the node's outer shape
          $(go.Shape, "Rectangle",
            {
              name: "SHAPE", fill: "#333333", stroke: 'white', strokeWidth: 3.5,
              // set the port properties:
              portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer"
            }),
          $(go.Panel, "Horizontal",
            $(go.Picture,
              {
                name: "Picture",
                desiredSize: new go.Size(70, 70),
                margin: 1.5,
              },
              new go.Binding("source", "key", findHeadShot)),
            // define the panel where the text will appear
            $(go.Panel, "Table",
              {
                minSize: new go.Size(130, NaN),
                maxSize: new go.Size(160, NaN),
                margin: new go.Margin(6, 10, 0, 6),
                defaultAlignment: go.Spot.Left
              },
              $(go.RowColumnDefinition, { column: 2, width: 4 }),
              $(go.TextBlock, textStyle(),  // the name
                {
                  row: 0, column: 0, columnSpan: 5,
                  font: "15pt Segoe UI,sans-serif",
                  editable: true, isMultiline: false,
                  minSize: new go.Size(10, 16)
                },
                new go.Binding("text", "name").makeTwoWay()),
              $(go.TextBlock, textStyle(),
                {
                  row: 1, column: 0, columnSpan: 4,
                  editable: true, isMultiline: false,
                  minSize: new go.Size(10, 14),
                },
                new go.Binding("text", "title").makeTwoWay()),
            )  // end Table Panel
          ) // end Horizontal Panel
        );  // end Node


      // define the Link template
      dia.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, relinkableFrom: true, relinkableTo: true },
          $(go.Shape, { strokeWidth: 1.5, stroke: "black" }));  // the link shape

      // read in the JSON-format data from the "mySavedModel" element

      dia.model = new go.TreeModel(this.familyData);
        // make sure new data keys are unique positive integers
        var lastkey = 1;
      dia.model.makeUniqueKeyFunction = (model, data) => {
        var k = data['key'] || lastkey;
        while (model.findNodeDataForKey(k)) k++;
        data['key'] = lastkey = k;
        return k;
      };
      dia.initialAutoScale =  go.Diagram.Uniform;
      dia.add($(go.Part,  // this Part is not bound to any model data
          { layerName: "Background", position: new go.Point(0, 0),
            selectable: false, pickable: false },
          $(go.Picture, "/sherylMythology/assets/god_tree_background.jpg")
        ));
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
