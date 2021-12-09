import WorkingArea from "../working-area";
import styles from "./styles.module.scss";

import { dia, ui, shapes } from "@clientio/rappid";
import { createRef, MutableRefObject } from "react";
import { Entity } from "../../types/uml";
import AddEntityModal from "../add-entity-modal";
import React from "react";

const entities: {
  [typeKey: string]: { typeName: string; type: any };
} = {
  class: {
    typeName: "Class",
    type: shapes.uml.Class,
  },
  abstract: {
    typeName: "Abstract class",
    type: shapes.uml.Abstract,
  },
  interface: {
    typeName: "Interface",
    type: shapes.uml.Interface,
  },
};

const links: {
  [typeKey: string]: { typeName: string; type: any };
} = {
  generalization: {
    typeName: "Generalization",
    type: shapes.uml.Generalization,
  },
  implementation: {
    typeName: "Implementation",
    type: shapes.uml.Implementation,
  },
  aggregation: {
    typeName: "Aggregation",
    type: shapes.uml.Aggregation,
  },
  composition: {
    typeName: "Composition",
    type: shapes.uml.Composition,
  },
  association: {
    typeName: "Association",
    type: shapes.uml.Association,
  },
};

interface Props {}

interface State {
  isModalOpen: boolean;
  umlAddedType?: string;
  umlAddedLink?: string;
}

class UmlModelling extends React.Component<Props, State> {
  graph: dia.Graph<dia.Graph.Attributes, dia.ModelSetOptions>;
  canvas: MutableRefObject<any> = createRef();

  constructor(props: Props) {
    super(props);
    this.graph = new dia.Graph();
  }

  state: State = {
    isModalOpen: false,
  };

  componentDidMount() {
    const paper = new dia.Paper({
      model: this.graph,
      background: {
        color: "#F8F9FA",
      },
      async: true,
    });

    paper.on("cell:pointerclick", function (cellView, evt, x, y) {
      evt.preventDefault();
      evt.stopPropagation();
      console.log(cellView, cellView.model.id + " was clicked");
    });

    const scroller = new ui.PaperScroller({
      paper,
      autoResizePaper: true,
      cursor: "grab",
    });

    this.canvas.current.appendChild(scroller.el);
    scroller.render().center();

    paper.unfreeze();
  }

  renderEntities = () => {
    return Object.keys(entities).map((typeKey: string) => {
      const typeData = entities[typeKey];

      return (
        <div
          className={styles.element}
          onClick={() => {
            this.setState({
              umlAddedType: typeKey,
              isModalOpen: true,
            });
          }}
        >
          {typeData.typeName}
        </div>
      );
    });
  };

  renderLinks = () => {
    return Object.keys(links).map((typeKey: string) => {
      const typeData = links[typeKey];

      return (
        <div
          className={styles.element}
          onClick={() => {
            this.addLink(typeKey);
          }}
        >
          {typeData.typeName}
        </div>
      );
    });
  };

  addLink = (linkType: string) => {
    const umlData = {
      source: { x: 100, y: 100 },
      target: { x: 200, y: 100 },
      customLinkInteractions: true,
    };

    let umlType = links[linkType].type;

    const rel = new umlType(umlData);
    this.graph.addCell(rel);
  };

  addEntity = (entity: Entity) => {
    if (!this.state.umlAddedType) return;

    const umlData = {
      position: { x: 0, y: 0 },
      size: { width: 240, height: 100 },
      name: [...entity.name],
      attributes: [...entity.attributes],
      methods: [...entity.methods],
    };

    let umlType = entities[this.state.umlAddedType].type;

    const uml = new umlType(umlData);
    this.graph.addCell(uml);

    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className={styles.umlModelling}>
        <div className={styles.elements}>
          <div className={styles.elementsBlock}>
            <p className={styles.elementsName}>Components</p>
            <div>{this.renderEntities()}</div>
          </div>

          <div className={styles.elementsBlock}>
            <p className={styles.elementsName}>Links</p>
            <div>{this.renderLinks()}</div>
          </div>
        </div>

        <WorkingArea canvas={this.canvas} />

        {this.state.isModalOpen && (
          <AddEntityModal
            open={this.state.isModalOpen}
            addEntity={this.addEntity}
            onClose={() => this.setState({ isModalOpen: false })}
          />
        )}
      </div>
    );
  }
}

export const UmlModellingWrapper = () => {
  return <UmlModelling />;
};
export default UmlModellingWrapper;

