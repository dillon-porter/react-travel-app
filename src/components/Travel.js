import React from "react"

export default function Travel(props) {
    return (
        <div className="travel--card">
            <img className="travel--img" src={`./${props.item.img}`} />
                <div className="travel--info">
                    <i className="fa fa-map-marker"></i><p className="country">{props.item.location}</p> <a className="google" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    <h3 className="travel--title">{props.item.title}</h3>
                        <span className="date">{props.item.startDate} - {props.item.endDate} </span>
                    
                    <p className="description">{props.item.description}</p>
                    
                </div>
        </div>
    )
}