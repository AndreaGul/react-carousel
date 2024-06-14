import caroselCss from "./Carosel.module.scss"

export default function ({title,image,isVisible}) {
    return(
        <>{isVisible &&  <div className={caroselCss.container}>
            <img src={image} alt="Nessun immagine trovata" />
            <h2>{title}</h2>
        </div>}
       
       
        </>
    )
}