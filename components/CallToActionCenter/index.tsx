import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import clsx from "clsx";

export type Props = {
  title: string;
  dark?: boolean;
};

const CallToActionCenter: FunctionComponent<Props> = ({ title, dark }) => (
  <div className={dark ? styles.rootDark : styles.rootLight}>
    <div className={styles.wrapper}>
      <h2 className={clsx(styles.title, dark && styles.titleDark)}>{title}</h2>
      <div className={styles.buttons}>
        <Link href="/contact">
          <a className="btn btn-blue btn-big">Formulaire de contact</a>
        </Link>
        <a
          href="mailto:contact@thibaud-duthoit.fr"
          className={clsx("btn btn-light btn-big", styles.buttonEmail)}
        >
          contact@thibaud-duthoit.fr
        </a>
      </div>
    </div>
  </div>
);

export default CallToActionCenter;
