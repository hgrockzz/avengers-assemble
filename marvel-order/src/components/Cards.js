function Cards(props){
    return(
        <div className="Cards">
            <div className="img-box">
                <img src={props.img}/>
            </div>
            <div className="text-box">
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default Cards;