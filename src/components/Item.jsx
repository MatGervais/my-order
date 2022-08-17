import React, {useEffect, useState} from 'react';

const Item = ({name,stock,renewed,prescPerDay}) => {

    const [toRenew, setRenew]=useState(new Date(renewed).toLocaleDateString())
    const [daysRemaining, setDaysRemaining] = useState(0)

    function addDaysToDate(date, days){
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }

    useEffect(()=>{
        function toRenewFunction(){
            var nbJourRestant = Math.trunc(stock/prescPerDay)
            var addedDays = addDaysToDate(renewed,nbJourRestant)
            console.log(addedDays);
            setRenew(addedDays)
        }
        toRenewFunction()
        console.log(toRenew);
        console.log(new Date(renewed));
        const diffTime = Math.abs(toRenew - new Date(renewed));
        console.log(diffTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays);
        setDaysRemaining(diffDays)
    },[toRenew, stock, prescPerDay,renewed])
    
    return (
      <div className={`card ${daysRemaining < 14 ? "border-danger" : ""} col-md-3 m-3`}>
        <div className= {`card-body`} >
          <h4 className="card-title">{name}</h4>
          <h6 className={`card-subtitle mb-2 ${daysRemaining < 14 ? "text-danger" : "text-muted"}`}>RESTANTS : {stock}</h6>
          <p className="card-text">Posologie (par jour) : {prescPerDay}</p>
          <p className="card-text">Inventaire fait le : {new Date(renewed).toLocaleDateString()}</p>
          <p className={`card-text`}>À renouveler le : {new Date(toRenew).toLocaleDateString()} <span className={`${daysRemaining < 14 ? "text-danger" : "text-muted"}`}>(dans {daysRemaining?daysRemaining:""} jours) </span></p>
        </div>
      </div>
    );
}

export default Item;
