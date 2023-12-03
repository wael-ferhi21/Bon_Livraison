import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoDest from '../InfoDest/InfoDest';
import InfoColis from '../InfoColis/InfoColis';
import NavBar from '../NavBar/NavBar';
import { createBl } from '../redux/actions/blActions'; // Import the action from your slice or file
import '../AddBL/AddBL.css';

function AddBL() {
  const [destinataireId, setDestinataireId] = useState(null);
  const [colisId, setColisId] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);

  const handleColisId = (id) => {
    setColisId(id);
  };

  const handleDestId = (id) => {
    setDestinataireId(id);
  };

  const createBLWithIds = () => {
    try {
      console.log('UserID:', userId);
      console.log('Destinataire ID:', destinataireId);
      console.log('Colis ID:', colisId);
  
      if (userId && destinataireId && colisId) {
        const blData = {
          refBl: 'YourRefBl',
          date: new Date(),
        };
  
        dispatch(createBl({ idUser: userId, idColis: colisId, id: destinataireId, createBlDto: blData }));
        console.log('success')
      } else {
        console.error('Missing user ID or IDs for BL creation');
      }
    } catch (error) {
      console.error('Error creating BL:', error);
    }
  };
  

  return (
    <div>
      <NavBar />
      <InfoDest passId={handleDestId} />
      <InfoColis passId={handleColisId} />
      <div className='validation'>
        <button type="button" className='btnv' onClick={createBLWithIds}>
          Valider
        </button>
      </div>
    </div>
  );
}

export default AddBL;