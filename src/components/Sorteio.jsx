import React  from "react";
import Card from "./Card";

export default props =>{
    const {min, max} = props;
    const aleatorio = Math.floor(Math.random() * ( max - min + 1)) + min;
    return(
        <Card tilte="Sorteio dos Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

