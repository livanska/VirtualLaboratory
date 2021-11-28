import ModuleCard from "../../components/module-card";
import Module from "../../types/module";
import styles from "./styles.module.scss";
import analysisImage from "../../assets/modules/Analysis.png";
import modellingImage from "../../assets/modules/Modelling.png";
import testingImage from "../../assets/modules/Testing.png";
import planningImage from "../../assets/modules/Planning.png";
import codingImage from "../../assets/modules/Coding.png";
import Navbar from "../../components/shared/Navbar";
import background from "../../assets/background.svg";

const modules: Module[] = [
  {
    title: "Requirements Analysis",
    image: analysisImage,
    levelsAmount: 0,
    passedTaskAmount: 0,
    allTaskAmount: 0,
    disabled: true,
    description:  "Process of determining user expectations for a new or modified product. Involves frequent communication with system users to determine specific feature expectations, avoidance of feature creep and documentation of all aspects of the project development process from start to finish.",
  },
  {
    title: "Modelling",
    image: modellingImage,
    levelsAmount: 3,
    passedTaskAmount: 6,
    allTaskAmount: 14,
    disabled: false,
    description:
      "Process of determining user expectations for a new or modified product. Involves frequent communication with system users to determine specific feature expectations, avoidance of feature creep and documentation of all aspects of the project development process from start to finish.",
  },
  {
    title: "Testing",
    image: testingImage,
    levelsAmount: 0,
    passedTaskAmount: 0,
    allTaskAmount: 0,
    disabled: true,
    description:
      "Process of determining user expectations for a new or modified product. Involves frequent communication with system users to determine specific feature expectations, avoidance of feature creep and documentation of all aspects of the project development process from start to finish.",
  },
  {
    title: "Planning",
    image: planningImage,
    levelsAmount: 0,
    passedTaskAmount: 0,
    allTaskAmount: 0,
    disabled: true,
    description:
      "Process of determining user expectations for a new or modified product. Involves frequent communication with system users to determine specific feature expectations, avoidance of feature creep and documentation of all aspects of the project development process from start to finish.",
  },
  {
    title: "Coding",
    image: codingImage,
    levelsAmount: 0,
    passedTaskAmount: 0,
    allTaskAmount: 0,
    disabled: true,
    description:
      "Process of determining user expectations for a new or modified product. Involves frequent communication with system users to determine specific feature expectations, avoidance of feature creep and documentation of all aspects of the project development process from start to finish.",
  },
];

const ModulesPage = () => {
  return (<>
  <Navbar/>
  <div  className={styles.background}/>
    <div className={styles.modulesPage}>
      {modules.map((module: Module) => (
        <ModuleCard module={module} />
      ))}
    </div></>
  );
};

export default ModulesPage;
