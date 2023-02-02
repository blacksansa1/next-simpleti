import style from "../components/third-section.module.css";

export default function ThirdSection() {
  return (
    <div className={style.container}>

      <div className={style.textContainer}>

        <div className={style.title}>
            Quem nos somos
            <img className={style.img} src="/assets/images/squaredots.svg" alt="" />
        </div>

        <div className={style.copy}>
          A empresa de Tecnologias da informação que você precisa no seu dia a dia. <br/> 
          Nosso foco é assistencia de usuarios em suas residencias.<br/>
          Com profissionais altamente treinados e com experiencia.
          Resolvemos o seu problema qualquer seja ele. 
        </div>
        
      </div>
    </div>
  );
}
