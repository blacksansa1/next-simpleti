import styles from "../components/second-section.module.css";

export default function SecondSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.titleContainer}>
            <div className={styles.titleCopy}>Nossa missão</div>
          </div>

          <div className={styles.copy}>
            A missão da Simpleti é proporcionar assistência técnica excepcional
            aos nossos clientes, Oferecendo serviços de alta qualidade no
            conforto de suas próprias casas.
          </div>
        </div>
      </div>
    </>
  );
}
