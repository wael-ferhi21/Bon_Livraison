import React,{ useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createColis } from '../redux/actions/colisActions';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function InfoColis(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [createdColisId, setCreatedColisId] = useState(null);

  const onSubmit = async (data) => {
    try {
      const id = await dispatch(createColis(data));
      props.passId(id); // Pass the created ID to the parent component
      setCreatedColisId(id);
      console.log({ id });
      // Do something with the createdColisId, maybe show it to the user or use it further
    } catch (error) {
      console.error('Failed to create colis:', error);
    }
  };
 
   
   
  
  return (
    <div className='container-dest'>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label className='saisie'>Saisir ici les données de votre colis :</Form.Label>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              {...register('desc', { required: true })}
              as="textarea"
              rows={3}
              placeholder="Enter description"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="montantHLiv">
            <Form.Label>Montant Hors Livraison</Form.Label>
            <Form.Control
              {...register('montantHLiv', { required: true })}
              type="number"
              placeholder="Enter Montant Hors Livraison"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="livraison">
            <Form.Label>Livraison</Form.Label>
            <Form.Control
              {...register('etatC', { required: true })}
              type="text"
              placeholder="Enter Livraison"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="montantLiv">
            <Form.Label>Montant Livraison</Form.Label>
            <Form.Control
              {...register('montantLiv', { required: true })}
              type="number"
              placeholder="Enter Montant Livraison"
              required
            />
          </Form.Group>
        </Row>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default InfoColis;

