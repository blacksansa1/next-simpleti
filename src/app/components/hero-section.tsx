import styles from "../components/hero-section.module.css";

export default function HeroSection() {
return (
    <>
<div className={styles.container}>

        <div className={styles.fchild}>
        Assistência técnica
        <br/>

        <span className={styles.fchildSpan}>
            simplificada
        </span>
        </div>

        <div className={styles.schild}>
            <img
            src="/assets/images/logo.svg"
            alt=""
            className={styles.logo} />
        </div>
</div>
    </>
);
}
