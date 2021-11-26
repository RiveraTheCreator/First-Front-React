import React from "react";
import PropTypes from 'prop-types';

function ContentRowMovies(props){
    return(
        <React.Fragment>
            {/*<!-- Movies in Data Base -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
										</div>
										<div className="col-auto">
                                            {/* logo*/}
											<i className={props.icono}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

        </React.Fragment>
    );
}
/**	let lastMovie = {titulo:"Actors quantity" ,cifra:79, borderColor:"yellow" ,icono:"fas fa-user fa-2x text-gray-300"} ;
 */
ContentRowMovies.propTypes = {
	titulo: PropTypes.array.isRequired ,
	cifra: PropTypes.number.isRequired ,
	borderColor: PropTypes.array.isRequired,
	icono: PropTypes.array.isRequired

}
ContentRowMovies.defaultProps ={
	icono: ""
}

export default ContentRowMovies;