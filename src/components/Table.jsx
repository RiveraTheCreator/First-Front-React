import React from "react";
import ContentRow from "./ContentRow";
import '../assets/css/table.css'


function Table(props){
    let pelicula1 = {
        titulo: "Billy Elliot",
        duracion: 123,
        rating: 5,
        genero: ["Drama","Comedia"],
        premios: 2
    };
    let pelicula2 = {
        titulo: "Transformers",
        duracion: 140,
        rating: 4,
        genero: ["Accion",'Ciencia ficcion'],
        premios: 1
    };
    let pelicula3 = {
        titulo: "Transformers",
        duracion: 140,
        rating: 4,
        genero: ["Accion",'Ciencia ficcion'],
        premios: 1
    };

    let peliculas = [pelicula1,pelicula2,pelicula3];
    
    return(
        <React.Fragment>
        <div className="col-auto"> 
        <table>
            <tr>
                <td>Titulo</td>
                <td>Duracion</td>
                <td>Rating</td>
                <td>Genero</td>
                <td>Premios</td>
            </tr>
        
                {
                    peliculas.map((peli,i) =>{
                       return<tr><ContentRow key={`${i}-id`} {...peli}/></tr>
                    })
                }          
            
        </table>
        </div>
        </React.Fragment>
    );
}
export default Table;