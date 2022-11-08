import { useMemo, Fragment } from "react";
import PropTypes from "prop-types";
import SearchBox from "../../components/SearchBox";
import DropDown from "../../components/DropDown";
import useFilter from "../../utils/hooks/useFilter";
import { REGION, FUSE_OPTIONS } from "../../utils/constants";
import CountryCard from "../../components/CountryCard";
import Fuse from "fuse.js";

function Countries({ countries }) {
    const [{ search = "", region = "" }, setFilter] = useFilter();

    const countriesWithFilter = useMemo(() => {
        const fuse = new Fuse(countries, FUSE_OPTIONS);
        const result = fuse.search(search).map(({ item }) => item);
        return search ? result : countries.filter((country) => (
            region ? country.region.toLowerCase() === region : true
        ));
    }, [countries, search, region]);

    return (
        <Fragment>
            <nav className="pb-10 block md:flex">
                <div className="w-full mb-3 md:mb-0 md:max-w-sm">
                    <SearchBox placeholder="Search for a country..." search={search} onChange={(value) => setFilter({ search: value })} />
                </div>
                <div className="w-full md:max-w-xs ml-auto">
                    <DropDown value={region} onChange={(value) => setFilter({ region: value })}>
                        {REGION.map((item) => (
                            <option key={item} value={item.toLowerCase()}>
                                {item || "Filter by Region"}
                            </option>
                        ))}
                    </DropDown>
                </div>
            </nav>
            <section className="columns-1 md:columns-4 md:gap-8">
                {countriesWithFilter.map((item, i) => (
                    <CountryCard key={i} {...item} />
                ))}
            </section>
        </Fragment>
    )
}

Countries.propTypes = {
    countries: PropTypes.array
};

Countries.defaultProps = {
    countries: []
}

export default Countries;