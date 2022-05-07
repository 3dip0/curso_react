import React, { useEffect, useState } from 'react';
import Grayimg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';
import Form from './form';

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    return await response.json()
}
const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [props]);

    const addSatellite = (new_sattelite) => (
        setSatellites([...satellites, new_sattelite])
    )

    return (
        <div>
            <h1>{props.title}</h1>
            <DescriptionWithLink description={props.description} url={props.url}/>
            <Grayimg img_url={props.img_url}/>
            <Form addSatellite={addSatellite}/>
            <ul>
                {satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Planet;