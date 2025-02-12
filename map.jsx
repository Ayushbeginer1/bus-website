import React from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    Polyline,
    CircleMarker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Searchbar from './Searchbar';
export default function Map() {
    var R411 = [[28.66608, 77.22161], [28.666559, 77.225985], [28.65772, 77.237025], [28.637486, 77.241354], [28.623984, 77.240946], [28.602062, 77.240437], [28.591309, 77.244873], [28.59143, 77.24508], [28.5612422, 77.2601598], [28.539241, 77.262093], [28.528465, 77.257906], [28.517083, 77.253606], [28.515334, 77.228463], [28.516121, 77.223488]]
    //Rt no.411


    var R416 = [[28.578444, 77.245872], [28.565188, 77.242835], [28.565562, 77.235762], [28.552367, 77.246167], [28.548188, 77.263018], [28.528465, 77.257906], [28.517083, 77.253606], [28.515334, 77.228463], [28.516121, 77.223488]]
    //Rt no.416


    var R417 = [[28.65772, 77.237025], [28.637486, 77.241354], [28.623984, 77.240946], [28.602062, 77.240437], [28.591309, 77.244873], [28.59143, 77.24508], [28.5612422, 77.2601598], [28.547317, 77.254033], [28.542766, 77.241437], [28.533607, 77.232256], [28.530183, 77.21835], [28.531166, 77.196722], [28.526476, 77.187485]]
    //Rt no.417


    var R419 = [[28.660068, 77.227361], [28.65772, 77.237025], [28.637486, 77.241354], [28.623984, 77.240946], [28.617924, 77.240434], [28.615303, 77.240378], [28.602062, 77.240437], [28.569562345495108, 77.23602220517395], [28.555457603448275, 77.22245315721172], [28.5471627111642, 77.2294641963357], [28.538980919555, 77.2323039754287], [28.53358930819305, 77.23218082843377], [28.516121, 77.223488]]
    //Rt no.419


    var R423 = [[28.66608, 77.22161], [28.66523, 77.235413], [28.64979828426494, 77.24580701929528], [28.637486, 77.241354], [28.623984, 77.240946], [28.617924, 77.240434], [28.615303, 77.240378], [28.602062, 77.240437], [28.533585544163348, 77.23219563373361], [28.518420324778393, 77.22753934713478], [28.50354956398155, 77.23174779964052]]
    //Rt no.423

    var R427 = [[28.586747956026816, 77.25334363207247], [28.57423545574589, 77.25687538056665],[28.5612422, 77.2601598],[28.548598526098562, 77.25566223723581],[28.542561760842396, 77.2416211946025],[28.533791328178573, 77.23219149426835],[28.516149121874502, 77.2236232621835],[28.520709603011447, 77.2023848337192],[28.522683,77.193521],[28.526476, 77.187485]]
    //Rt no.427

    var R440 = [[28.642785956635908, 77.2237074316325],[28.628709211500077, 77.22193488512207],[28.61724951409564, 77.22850909269948],[28.60743315874945, 77.22722978983514],[28.598527916111987, 77.22503449802669],[28.5916976815291, 77.22352686359288],[28.574919979610243, 77.22902923783953],[28.58500535533393, 77.22879987671888],[28.552390530942734, 77.24621484287034],[28.548188, 77.263018],[28.528465, 77.257906],[28.517083, 77.253606],[28.516121, 77.223488]]
    //Rt no.440

    var R446 = [[28.66608, 77.22161],[28.666559, 77.225985],[28.66523, 77.235413], [28.64979828426494, 77.24580701929528], [28.637486, 77.241354], [28.623984, 77.240946], [28.617924, 77.240434], [28.615303, 77.240378], [28.602062, 77.240437]]
    return (
        <>
            <div style={{ height: "100vh", marginLeft: "10px", marginRight: "10px", position: "relative", border:"none"}} className="outline outline-black right-2 ">

                <MapContainer center={[28.6304, 77.2177]} zoom={10} scrollWheelZoom={true} zoomControl={true} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polyline positions={R411}>
                        <Popup>
                            Rt.no.411
                        </Popup>
                        <Marker position={[28.516121, 77.223488]}>
                            <Popup className='font-extrabold text-center'>
                                B.R. Ambedkar Terminal/DIPSAR
                            </Popup>
                        </Marker>
                        <Marker position={[28.66608, 77.22161]}>
                            <Popup className='font-extrabold text-center'>
                                Mori Gate Terminal
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R416}>
                        <Popup>
                            Rt.no.416
                        </Popup>
                        <Marker position={[28.565188, 77.242835]}>
                            <Popup className='font-extrabold'>
                                Lajpat Nagar
                            </Popup>
                        </Marker>
                        <Marker position={[28.578444, 77.245872]}>
                            <Popup className='font-extrabold'>
                                Jal Vihar Terminal
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R417}>
                        <Popup>Rt.no.417</Popup>
                        <Marker position={[28.65772, 77.237025]}>
                            <Popup className='font-extrabold'>Red Fort</Popup>
                        </Marker>
                        <Marker position={[28.526476, 77.187485]}><Popup className='font-extrabold'>
                            Mehrauli
                        </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R419}>
                        <Popup>Rt.no.419</Popup>
                        <Marker position={[28.660068, 77.227361]} autoPanOnFocus={true}>
                            <Popup className='font-extrabold'>
                                Old Delhi Rly. Stn.
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R423}>
                        <Popup>Rt.no.423</Popup>
                        <Marker position={[28.50354956398155, 77.23174779964052]}>
                            <Popup className='font-extrabold'>
                                Deoli Village
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R427}>
                        <Popup >Rt.no.427</Popup>
                        <Marker position={[28.5863252, 77.2530455]}>
                            <Popup className='font-extrabold'>
                                Nizamuddin Rly. Stn.
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R440}>
                        <Popup>
                            Rt.no.440
                        </Popup>
                        <Marker position={[28.642785956635908, 77.2237074316325]}>
                            <Popup className='font-extrabold'>
                                New Delhi Rly. Stn. Gate-2
                            </Popup>
                        </Marker>
                    </Polyline>

                    <Polyline positions={R446}>
                        <Popup className='font-extrabold'>
                            Rt.no.446
                        </Popup>
                    </Polyline>
                </MapContainer>
            </div>
        </>
    );
}
