const Order = ({ sortOption, onSortChange }) => {   
    return (
        <div className="col col-md-4 py-2">
        <select className="mx-auto my-select form-select" onChange={onSortChange} value={sortOption}> 
            <option value="nombre a">Nombre A-Z</option>
            <option value="nombre z">Nombre Z-A</option>
            <option value="menor poblacion">Menor Población</option>
            <option value="mayor poblacion">Mayor Población</option>
            <option value="menor area">Menor Área</option>
            <option value="mayor area">Mayor Área</option>
        </select>
    </div>
    );
  };

  export default Order;