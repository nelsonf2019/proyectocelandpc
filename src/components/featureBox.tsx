
interface Props{
    title: string
    children: string
}
 

export const FeatureBox =({children, title}:Props)=>{
    return(
        <div className="a-box">
            <div className="a-b-img">
                <img src={children} alt="" />
            </div>
            <div className="s-b-text">
                <h2> {title} </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat inventore accusantium magni id laborum numquam culpa quaerat recusandae ducimus porro vitae voluptatibus quo, ipsum blanditiis earum voluptates sunt quod repellat?</p>
            </div>
        </div>
    )
}