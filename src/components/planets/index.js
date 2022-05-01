import React, { Fragment, useEffect, useState } from 'react';
import Form from './form';
import Planet from './planet';

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    return await response.json()
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => (
        setPlanets([...planets, new_planet])
    )
    return (
        <Fragment>
            <h1>Planet List</h1>
            <hr />
            <Form addPlanet={addPlanet}/>
            <hr />
            {planets.map((planet, index) => 
            <Planet
            key={index}
            id={planet.id}
            title={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            url={planet.url} />
            
            )}
            

        </Fragment>
        )
    }

export default Planets;