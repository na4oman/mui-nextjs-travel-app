/*
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css'
import { styled } from '@mui/system'

const MapContainer = styled('div')({
  height: '400px',
  // width: '100vw',
  // height: 'calc(100vh - 80px)',
  // position: 'absolute',
})

const Sidebar = styled('div')({
  position: 'absolute',
  backgroundColor: 'rgba(35, 55, 75, 0.9)',
  color: '#fff',
  padding: '6px 12px',
  fontFamily: 'monospace',
  fontSize: '10px',
  zIndex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '12px',
  borderRadius: '4px',
})

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXRhbmFzLWlyaWtldiIsImEiOiJjbDI3YjMyengwMWJvM2RueDlwaHZwc29oIn0._e2TrV0-QGeyabs40wyKsA'

export default function Mapbox({ lng: initLng, lat: initLat }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(initLng.toFixed(4))
  const [lat, setLat] = useState(initLat.toFixed(4))
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      attributionControl: false,
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  // Create a new marker.
  // const marker = new mapboxgl.Marker()
  //   .setLngLat([12.65147, 55.608166])
  //   .addTo(map)

  return (
    <div style={{ position: 'relative', marginBottom: '50px' }}>
      <Sidebar>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </Sidebar>
      <MapContainer ref={mapContainer} />
    </div>
  )
}
*/

////////////////////////////////
////////////////////////////////

import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const styles = {
  height: '375px',
  // width: 'auto',
  // height: 'calc(100vh - 80px)',
  // position: 'absolute',
}

const Mapbox = ({ lng, lat }) => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYXRhbmFzLWlyaWtldiIsImEiOiJjbDI3YjMyengwMWJvM2RueDlwaHZwc29oIn0._e2TrV0-QGeyabs40wyKsA'
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [lng, lat],
        zoom: 9,
      })

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl())

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map, lat, lng])

  return <div ref={el => (mapContainer.current = el)} style={styles} />
}

export default Mapbox
