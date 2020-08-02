import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);
    // // Con lo siguiente le indicamos que solo queremos renderizar unica vez
    // useEffect( () => {
    //     getGifs( category )
    //         // .then( imgs => setImages( imgs ) );
    //         .then( setImages );
    // }, [ category ]);

    const {data: images, loading} = useFetchGifs( category );

    // getGifs();
    return (
        <>  
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            {/* { loading ? 'Cargando...' : 'Cargado' } */}
            {/* <div className="card-grid" >
                { 
                    // images.map( ( { id, title } ) => <li key={ id } >{ title }</li>) 
                    images.map( img => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img } 
                        />
                    ))
                }
            </div> */}
            <div className="card-grid" >
                { 
                    // images.map( ( { id, title } ) => <li key={ id } >{ title }</li>) 
                    images.map( img => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
