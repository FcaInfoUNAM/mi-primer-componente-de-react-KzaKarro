export function Grid({items}){
    /* Escrobe aquí tu código */ 
    return (
        <div className="grid"> 
            {items.map(e => <div className="card-item"><h2>{e.title}</h2><p>{e.ref}</p></div>)} 
        </div> 
    )
}