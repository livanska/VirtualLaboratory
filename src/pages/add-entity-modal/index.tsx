import { Modal } from "@material-ui/core";
import { useState } from "react";
import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import { Entity } from "../../types/uml";

import styles from "./styles.module.scss";

interface Props {
  open: boolean;
  addEntity: (entity: Entity) => void;
  onClose: () => void;
}

const AddEntityModal = (props: Props) => {
  const { open, addEntity, onClose } = props;

  const [name, setName] = useState("");
  const [attributeText, setAttributeText] = useState("");
  const [methodText, setMethodText] = useState("");

  const handleAddEntity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const attributes = attributeText.split("\n");
    const methods = methodText.split("\n");

    const entityData: Entity = {
      name: [name],
      attributes,
      methods,
    };

    addEntity(entityData);
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.modal}>
      <div className={styles.modalBody}>
        <p className={styles.title}>
          Add entity
          {/* Add {entityType ? entities[entityType] : "entity"} */}
        </p>

        <FieldGroup
          title="Name"
          fieldProps={{ value: name, onChange: (e) => setName(e.target.value) }}
        />

        <FieldGroup
          title="Attributes"
          fieldProps={{
            value: attributeText,
            onChange: (e) => setAttributeText(e.target.value),
            multiline: true,
          }}
        />

        <FieldGroup
          title="Methods"
          fieldProps={{
            value: methodText,
            onChange: (e) => setMethodText(e.target.value),
            multiline: true,
          }}
        />

        <div className={styles.buttons}>
          <Button buttonstyle="secondary" onClick={onClose}>
            Close
          </Button>
          <Button buttonstyle="primary" onClick={handleAddEntity}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEntityModal;
