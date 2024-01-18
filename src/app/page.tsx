import Image from "next/image";
import styles from "./page.module.css";
import CustomForm from "./components/form/CustomForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <CustomForm />
      </div>

      <div className={styles.tableContainer}></div>
    </div>
  );
}
