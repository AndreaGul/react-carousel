import caroselCss from "./Carosel.module.scss"

export default function ({title,image,isVisible}) {
    return(
        <>
        <div className={caroselCss.container} style={{display: isVisible ? 'block' : 'none'}}>
            <img src={image} alt="Nessun immagine trovata" />
            <h2>{title}</h2>
        </div>
       
        </>
    )
}