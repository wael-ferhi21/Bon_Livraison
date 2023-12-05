import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InfoDest({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  const onSubmitDest = (data) => {
    onSubmit(data); // Pass form data up to the parent component
  };

  return (
    <div className='container-dest'>
      <Form onSubmit={handleSubmit(onSubmitDest)}>
        <Form.Label className='saisie'>Saisir ici les données de votre destinataire :</Form.Label>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              {...register('nomDest', { required: true })}
              type="text"
              placeholder="Nom"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="numTelephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              {...register('numTelephone', { required: true })}
              type="tel"
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
