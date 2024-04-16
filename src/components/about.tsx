interface Props{
    title: string
    phatImage: string
    boton: string
}

export const About =({title, phatImage, boton}: Props)=>{
    return(
        <div id="about">
            <div className="about-image">
                <img src={phatImage} alt=""/>
            </div>
            <div className="about-text">
                <h2>{title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum placeat vitae beatae enim repellat quaerat sit eius dignissimos officiis velit, quam quo! Saepe magni facilis maiores consectetur obcaecati iure!
                    <button className="button"> {boton} </button>
                </p>
            </div>
        </div>
    )
}