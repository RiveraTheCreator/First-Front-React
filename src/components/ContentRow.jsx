import React from "react";

function ContentRow(props){

    return(
        <React.Fragment>
        
            <td>{props.titulo}</td>
            <td>{props.duracion}</td>
            <td>{props.rating}</td>
            <td>
                <ul>
                    {props.genero.map((genre,i)=>{
                       return <li key={`${i}`}>{genre}</li>
                    })}
                </ul>
            </td>
            <td>{props.premios}</td>
        
        </React.Fragment>
    );
}
export default ContentRow;