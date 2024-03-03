import { useState, useEffect } from "react";
import Buscador from "./Buscador";
import Order from "./Order";

const MiApi = (props) => {
  const [dataCountries, setDataCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('nombre a');

  // CONSUMO DE API Y CARGA INICIAL DE DATOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Error al consultar API');
        }
        const data = await response.json();
        setDataCountries(data);
        //console.log(data);
      } catch (error) {
        console.error("Error al traer datos", error);
      }
    };
    fetchData();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // FUNCIÓN PARA FORMATEAR VALORES NÚMERICOS COMO POBLACIÓN Y ÁREA
  const formatearNumero = (numero) => {
    return new Intl.NumberFormat(navigator.language).format(numero);
  }

  // ORDENAMIENTO SEGÚN OPCIÓN DEL SELECT
  const sortCountries = (countriesArray) => {
    const sortFunctions = {
      'nombre a': (a, b) => a.name.common.localeCompare(b.name.common),
      'nombre z': (a, b) => b.name.common.localeCompare(a.name.common),
      'menor poblacion': (a, b) => a.population - b.population,
      'mayor poblacion': (a, b) => b.population - a.population,
      'menor area': (a, b) => (a.area || 0) - (b.area || 0),
      'mayor area': (a, b) => (b.area || 0) - (a.area || 0),
    };

    return countriesArray.sort(sortFunctions[sortOption]);
  };

  // FUNCIÓN PARA BUSCAR
  const filteredAndSortedCountries = sortCountries(
    dataCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <>
      <div className="container mb-3">
      <div className="row">
        <Buscador
          searchText={setSearchText}
        />
        <Order 
        sortOption={sortOption} 
        onSortChange={handleSortChange} />
      </div>
      </div>
      {filteredAndSortedCountries.map((country, index) => (
        <div key={country.cca3 + country.ccn3} className="col-sm-6 col-md-4 col-xs-10 mb-3"> 
          <div className="card h-100">
            <img src={country.flags.svg} className="card-img-top" alt="flag" />
            <div className="card-body"></div>
            <div className="card-footer">
              <h3 className="card-title text-center">{country.name.common}</h3>
              <p className="card-text">Población: {formatearNumero(country.population)}</p>
              <p className="card-text">Área: {formatearNumero(country.area)} km²</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MiApi;
