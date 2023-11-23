
const cleanInfoAPI = ( response ) => {
    const countriesAPI = response.data;
    const countriesClean = [];
    for( const country of countriesAPI ){

        const id = country.cca3;
        const name = country.name.common;
        const image = country.flags.svg;
        const continent = Array.isArray( country.continents ) && country.continents.toString();
        const capital = Array.isArray( country.capital ) && country.capital.toString();
        const subregion = country?.subregion;
        const area = country.area;
        const population = country.population;

        countriesClean.push({
            id,
            name,
            image,
            continent,
            capital,
            subregion,
            area,
            population,
        })
    }

    return countriesClean;
}

module.exports = {
    cleanInfoAPI
};