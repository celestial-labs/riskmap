import React, {useState} from "react";
import {queryFeatures} from "@esri/arcgis-rest-feature-layer";
import ResultList from "./ResultList";
import debounce from "lodash.debounce";


const Search = () => {
    const [data, setData] = useState([]);
    const service = debounce(function (value) {
        queryFeatures({
            url: "https://services.arcgis.com/LG9Yn2oFqZi5PnO5/ArcGIS/rest/services/Armed_Conflict_Location_Event_Data_ACLED/FeatureServer/0",
            where: "location = '" + value.target.value + "'",
            outFields: ['*'],
            f: 'json'
        }).then((response) => {
            setData(response.features)
        })
    }, 600);

    return <div className="overlay d-flex flex-column">
        <div className={'p-2'}>
            <input className={'w-100'} type="text" name="name" onChange={(e) => service(e)} />
        </div>
        <ResultList value={data} />
    </div>;
}

export default Search