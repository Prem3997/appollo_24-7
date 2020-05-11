import React from 'react'

function CardComponent(props){

    return(
        <div id="card-border">
            <div>
                <img id="card-image" src={require(`../../assets/dashboard-assets/${props.imgName}.svg`)} alt="Loading..."></img>  
                <span id='card-name'>{props.name}</span>
            </div>
           <p id="card-count">{props.count}</p>
        </div>
    )
}

export default CardComponent