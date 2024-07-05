import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ic1 from '../assets/clarity_image-gallery-line.png';
import ic2 from '../assets/akar-icons_location.png';
import ic3 from '../assets/bi_info-circle.png';
import Info from './Info';
import LocationDiv from './Location';
import GalleryDiv from './Gallery';

const PlaceDetails = () => {
  const [toggleState, setToggleState] = useState(1);
  const { placeId } = useParams();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getPlaceDetails = (id) => {
    const places = [
      { id: 1, img: '...', date: '2024-07-01', people: '4', desc: 'Description 1', amount: '$100', place: 'Place 1' },
      { id: 2, img: '...', date: '2024-07-01', people: '4', desc: 'Description 2', amount: '$200', place: 'Place 2' },
      { id: 3, img: '...', date: '2024-07-01', people: '4', desc: 'Description 3', amount: '$300', place: 'Place 3' },
      { id: 4, img: '...', date: '2024-07-01', people: '4', desc: 'Description 4', amount: '$400', place: 'Place 4' },
      { id: 5, img: '...', date: '2024-07-01', people: '4', desc: 'Description 5', amount: '$500', place: 'Place 5' },
      { id: 6, img: '...', date: '2024-07-01', people: '4', desc: 'Description 6', amount: '$600', place: 'Place 6' },
    ];
    return places.find(place => place.id === parseInt(id));
  };

  const place = getPlaceDetails(placeId);

  return (
    <div>
      {place ? (
        <div className="container">
          <div className="bloc-tabs">
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
              <img src={ic3} alt="Information" />
              <p className='poppins-bold text-[18px] text-[#343434]'>Information</p>
            </div>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
              <img src={ic2} alt="Location" />
              <p className='poppins-bold text-[18px] text-[#343434]'>Location</p>
            </div>
            <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
              <img src={ic1} alt="Gallery" />
              <p className='poppins-bold text-[18px] text-[#343434]'>Gallery</p>
            </div>
          </div>

          <div className="content-tabs">
            <div className={toggleState === 1 ? "content active-content" : "content"}>
              <Info />
            </div>
            <div className={toggleState === 2 ? "content active-content" : "content"}>
              <LocationDiv />
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
              <GalleryDiv />
            </div>
          </div>
        </div>
      ) : (
        <p>Place not found</p>
      )}
    </div>
  );
};

export default PlaceDetails;
