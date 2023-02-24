import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ContactForm } from '../../collections';

const ContactPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidGVyaXR1bSIsImEiOiJjbGVicmEyc2YwdGFlM3hzMmxvNGhobnVnIn0.flSUOhnYi4M4hnXT5k8hsg';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96.810406, 32.757889],
      zoom: 12,
    });
    // Create a new marker
    const marker = new mapboxgl.Marker()
      .setLngLat([-96.810406, 32.757889]) // Set the marker's location
      .addTo(map.current); // Add the marker to the map
  }, []);

  return (
    <div className='md:ml-20'>
      <h2 className='text-4xl font-bold text-center my-10'>Contact Us</h2>
      <div className='flex md:flex-row flex-col space-x-8 '>
        <div className='md:max-w-1/2'>
          {/* Form */}
          <ContactForm />
        </div>
        <div
          style={{ height: '500px' }}
          className='map-container md:w-1/2'
          ref={mapContainer}
        />
      </div>
    </div>
  );
};

export default ContactPage;
