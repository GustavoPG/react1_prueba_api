const Buscador = ({ searchText }) => {
    
    const handleSearchChange = (event) => {
        searchText(event.target.value.trim());
      };
    return (
        <div className="col col-md-8 col-sm-12 py-2">
            <input className="my-search"
                type="text"
                placeholder="Búsqueda..."
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Buscador;