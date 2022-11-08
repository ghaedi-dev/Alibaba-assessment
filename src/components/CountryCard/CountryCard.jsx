import { Link } from "react-router-dom";

function CountryCard({ ...country }) {
    const { name, flags, population, region, capital } = country;

    return (
        <div className="inline-flex w-full pb-10 md:w-1/4 md:p-5">
            <Link className="shadow-xl w-full rounded-xl h-96 dark:bg-slate-800 border dark:border-white/5 dark:text-white"
                to={`/countries/${name.common.toLowerCase()}`} state={country}>
                <img className="object-cover h-56 w-full rounded-t-xl" loading="lazy" src={flags.svg} alt={name.common} />
                <div className="pl-3 pt-2">
                    <p className="text-xl font-bold pb-3">{name.common}</p>
                    <div>
                        <span className="font-bold">Population: </span>
                        <span>{population.toLocaleString()}</span>
                    </div>
                    <div>
                        <span className="font-bold">Region: </span>
                        <span>{region}</span>
                    </div>
                    <div>
                        <span className="font-bold">Capital: </span>
                        <span>{[capital]}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
