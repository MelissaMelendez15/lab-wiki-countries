import React from 'react'
import { Link } from 'react-router-dom'
import countriesFromDB from '../../countries.json'


const CountryDetails = props => {
    const id = props.match.params.id
    
    const country = countriesFromDB.find(elm => elm.cca3 === id)
    const borders = country.borders.map(code => <li key={code}><Link to={`/country/${code}`}>{code}</Link></li>)

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td className="capital">Capital</td>
                    <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{country.area} Km<sup>2</sup></td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {borders}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
}

export default CountryDetails