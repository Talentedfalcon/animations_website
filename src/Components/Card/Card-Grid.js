import React from "react";
import './Card-Grid.css';

function Card(props){
    return(
        <div className="card-box">
            <img src="/Temp/pic.png" alt="Not available" ></img>
            <div className="animation-name">{props.animation_name}</div>
        </div>
    )
}

function CardGrid(){
    return(
        <>
        <div className="card-grid">
            <Card animation_name="Card Style 1"/>
            <Card animation_name="Card Style 2"/>
            <Card animation_name="Card Style 2"/>
            <Card animation_name="Card Style 2"/>
            <Card animation_name="Card Style 2"/>
            <Card animation_name="Card Style 2"/>
        </div>
        </>
    )
}

export default CardGrid;