import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IContact } from 'app/shared/model/contact.model';
import { getEntity, updateEntity, createEntity, reset } from './contact.reducer';

export const ContactUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const contactEntity = useAppSelector(state => state.contact.entity);
  const loading = useAppSelector(state => state.contact.loading);
  const updating = useAppSelector(state => state.contact.updating);
  const updateSuccess = useAppSelector(state => state.contact.updateSuccess);

  const handleClose = () => {
    navigate('/contact');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...contactEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...contactEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="tpb3App.contact.home.createOrEditLabel" data-cy="ContactCreateUpdateHeading">
            Créer ou éditer un Contact
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="contact-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Nom" id="contact-nom" name="nom" data-cy="nom" type="text" />
              <ValidatedField label="Prenom" id="contact-prenom" name="prenom" data-cy="prenom" type="text" />
              <ValidatedField label="Age" id="contact-age" name="age" data-cy="age" type="text" />
              <ValidatedField label="Ville" id="contact-ville" name="ville" data-cy="ville" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/contact" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Retour</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Sauvegarder
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ContactUpdate;
