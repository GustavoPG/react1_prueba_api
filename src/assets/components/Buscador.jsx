const Buscador = ({ searchText, handleSearchChange }) => {

    return (
        <div className="col col-md-8 col-sm-12 py-2">
            <input className="my-search"
                type="text"
                placeholder="Búsqueda..."
                value={searchText}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Buscador;