import './styles.css'
import * as React from "react";
import {useEffect, useState} from "react";

const delayFetch = (url, options) => {
    // 👀 In case API is too fast:
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetch(url, options));
        }, options.delay);
    });
};

async function fetchCountry(countryCode) {
    try {
        const res = await delayFetch(`https://restcountries.com/v2/alpha/${countryCode}`, {
            delay: 500,
        });

        if (res.ok === true) {
            return {
                error: null,
                response: await res.json(),
            };
        }

        throw new Error(`Error fetching country #${countryCode}`);
    } catch (e) {
        return {
            error: e,
            response: null,
        };
    }
}

export default function CountryInfo() {
    const [countryCode, setCountryCode] = useState("AU");
    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCountryCode(e.target.value)
    };

    useEffect(() => {
        let ignore = false;

        const handleFetchCountries = async () => {
            setIsLoading(true)
            setError(null);

            const {error, response} = await fetchCountry(countryCode)

            if (ignore) {
                return
            } else if (error) {
                setError(error.message)
            } else {
                setData(response)
            }

            setIsLoading(false)
        }

        handleFetchCountries();

        return () => {
            ignore = true;
        }
    }, [countryCode]);

    return (
        <div className="container">
            <section>
                <header>
                    <h1>Country Info:</h1>

                    <label htmlFor="country">Select a country:</label>
                    <div>
                        <select id="country" value={countryCode} onChange={handleChange}>
                            <option value="AU">Australia</option>
                            <option value="CA">Canada</option>
                            <option value="CN">China</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="IN">India</option>
                            <option value="JP">Japan</option>
                            <option value="MX">Mexico</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States of America</option>
                        </select>
                        {isLoading && <span>Loading...</span>}
                        {error && <span>{error.message}</span>}
                    </div>
                </header>

                {data && (
                    <article>
                        <h2>{data.name}</h2>
                        <table>
                            <tbody>
                            <tr>
                                <td>Capital:</td>
                                <td>{data.capital}</td>
                            </tr>
                            <tr>
                                <td>Region:</td>
                                <td>{data.region}</td>
                            </tr>
                            <tr>
                                <td>Population:</td>
                                <td>{data.population}</td>
                            </tr>
                            <tr>
                                <td>Area:</td>
                                <td>{data.area}</td>
                            </tr>
                            </tbody>
                        </table>
                    </article>
                )}
            </section>
        </div>
    );
}
