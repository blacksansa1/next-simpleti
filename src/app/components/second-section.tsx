import styles from "../components/second-section.module.css";

export default function SecondSection() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.titleCopy}>Nossa missão</h3>

        <div className={styles.copy}>
          A missão da Simpleti é proporcionar assistência técnica excepcional
          aos nossos clientes, Oferecendo serviços de alta qualidade no conforto
          de suas próprias casas.
        </div>
      </div>
    </>
  );
}
