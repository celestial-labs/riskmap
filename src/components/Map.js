import React, {useRef} from "react";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcMap from "@arcgis/core/Map";
import { ApiKey } from "@esri/arcgis-rest-auth";

//set global API key
esriConfig.apiKey = "AAPKf1599745e9024d9396b3bddbe87b3a1fr2B9HbZYST87PjBwi8Ig6bkG-vuFsNpX-s_GqLw1_DKD4dzf8fjD0cizqg-Hl8IG";
const serviceUrl = "https://services.arcgis.com/LG9Yn2oFqZi5PnO5/ArcGIS/rest/services/Armed_Conflict_Location_Event_Data_ACLED/FeatureServer/0";

const Map = () => {
    const mapDiv = useRef(null);

    React.useEffect(() => {
        if (mapDiv.current) {
            const layer = new FeatureLayer({
                url: serviceUrl,
            });

            const map = new ArcMap({
                basemap: "arcgis-navigation",
                layers: [layer]
            })

            new MapView({
                container: mapDiv.current,
                map,
                center: [42.987378, 47.504169],
                zoom: 2,
            })
        }
    }, []);

    return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Map