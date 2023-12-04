import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoDest from '../InfoDest/InfoDest';
import InfoColis from '../InfoColis/InfoColis';
import NavBar from '../NavBar/NavBar';

import { generatePdf } from '../redux/actions/pdfActions';
import '../AddBL/AddBL.css';


function AddBL() {
  const [destinataireId, setDestinataireId] = useState(null);
  const [colisId, setColisId] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);

  const handleColisId = (id) => {
    setColisId(id);
  };

  const handleDestId = (id) => {
    setDestinataireId(id);
  };

  const generatePdfFile = async () => {
    if (userId && destinataireId && colisId) {
      console.log('user',userId);
      console.log('dest',destinataireId);
      console.log('coils',colisId);
      try {
        // Dispatch the generatePdf action passing the IDs
        dispatch(generatePdf({ idDest: destinataireId,idUser: userId, idColis: colisId }));
      } catch (error) {
        console.error('Error generating PDF:', error);
        // Handle errors appropriately
      }
    } else {
      console.error('Missing user ID or IDs for PDF generation');
      // Handle missing IDs appropriately
    }
  };

  return (
    <div>
      <NavBar />
      <InfoDest passId={handleDestId} />
      <InfoColis passId={handleColisId} />
      <div className='validation'>
        <button type="button" className='btnv' onClick={generatePdfFile}>
          Valider
        </button>
      </div>
    </div>
  );
}

export default AddBL;
