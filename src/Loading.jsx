import img from "./assets/pokeball.png";
import "./Loading.css";

export function Loading() {

    return (
        <>
            <div className="LoadingBall">
                <img src={img} alt="pokeball" className="loading_Pokeball"/>
            </div>
        </>
    )

}