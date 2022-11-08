import { useMemo, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowBackIcon } from "../../assets";
import Button from "../../components/Button";

function Country({ countries }) {
    const navigate = useNavigate();
    const { country } = useParams();

    const thisCountry = useMemo(() => {
        if (!countries) return null;

        const found = countries.find(item => item.name.common.toLowerCase() === country);

        if (!found) return null;

        const nativeName = [];
        const languages = [];
        const currencies = [];

        for (const key in found.name.nativeName) {
            nativeName.push(found.name.nativeName[key].common);
        }

        for (const key in found.languages) {
            languages.push(found.languages[key]);
        }

        for (const key in found.currencies) {
            currencies.push(found.currencies[key].name);
        }

        return {
            ...found,
            name: found.name.common,
            flags: found.flags.svg,
            nativeName: nativeName.join(", "),
            languages: languages.join(", "),
            currencies: currencies.join(", ")
        };
    }, [countries, country]);

    console.log(thisCountry);
    return (
        <Fragment>
            <nav className="pb-10 block sm:flex">
                <Button className="shadow-md border hover:shadow-xl" onClick={() => navigate("/")}>
                    <ArrowBackIcon className="pr-1" />
                    <span>Back</span >
                </Button>
            </nav>
            <section className="block sm:flex dark:text-white">
                <div className="w-full sm:w-1/2">
                    <img className="object-cover w-full mb-10" loading="lazy" src={thisCountry?.flags} alt={thisCountry?.name} />
                </div>
                <div className="w-full sm:w-1/2 pl-5">
                    <p className="text-2xl font-bold pb-5">{thisCountry?.name}</p>
                    <div className="block md:flex pb-10">
                        <div>
                            <div>
                                <span className="font-bold">Native Name: </span>
                                <span>{thisCountry?.nativeName}</span>
                            </div>
                            <div>
                                <span className="font-bold">Population: </span>
                                <span>{thisCountry?.population}</span>
                            </div>
                            <div>
                                <span className="font-bold">Region: </span>
                                <span>{thisCountry?.region}</span>
                            </div>
                            <div>
                                <span className="font-bold">Sub Region: </span>
                                <span>{thisCountry?.subregion}</span>
                            </div>
                            <div>
                                <span className="font-bold">Capital: </span>
                                <span>{thisCountry?.capital}</span>
                            </div>
                        </div>
                        <div className="md:ml-auto">
                            <div>
                                <span className="font-bold">Top Level Domain: </span>
                                <span>{thisCountry?.tld}</span>
                            </div>
                            <div>
                                <span className="font-bold">Currencies: </span>
                                <span>{thisCountry?.currencies}</span>
                            </div>
                            <div>
                                <span className="font-bold">Languages: </span>
                                <span>{thisCountry?.languages}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">Border Countries:</span>
                        {thisCountry?.borders?.map(border => {
                            const found = countries?.find(item => item.fifa === border);
                            if (!found) return null;
                            return (
                                <Link className="inline-flex m-1 p-1 rounded-sm shadow-md hover:shadow-xl border dark:bg-slate-800 dark:border-white/5 dark:text-white"
                                    key={border} to={`/countries/${found.name.common.toLowerCase()}`}>
                                    {found.name.common}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

Country.propTypes = {
    countries: PropTypes.array
}

Country.defaultProps = {
    countries: []
}

export default Country;