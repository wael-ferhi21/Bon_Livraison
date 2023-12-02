import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createDestinataire } from '../redux/actions/destActions'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../InfoDest/InfoDest.css';


function InfoDest(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [createdDestinataireId, setCreatedDestinataireId] = useState(null);

  const onSubmit = async (data) => {
    try {
      const id = await dispatch(createDestinataire(data));
      props.passId(id); // Pass the created ID to the parent component
      setCreatedDestinataireId(id);
      console.log({ id });
    } catch (error) {
      console.error('Failed to create destinataire:', error);
    }
  };


  return (
    <div className='container-dest'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label className='saisie'>Saisir ici les données de votre destinataire :</Form.Label>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              {...register('nom', { required: true })}
              type="text"
              placeholder="Nom"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="numTelephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              {...register('numTelephone', { required: true })}
              type="number"
              placeholder="Téléphone"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="address">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              {...register('address', { required: true })}
              type="text"
              placeholder="Adresse"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="gov">
            <Form.Label>Governorat</Form.Label>
            <Form.Select {...register('gov', { required: true })}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="delegation">
            <Form.Label>Délégation</Form.Label>
            <Form.Select {...register('delegation', { required: true })}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default InfoDest;

