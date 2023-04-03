package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Contact.class)
public abstract class Contact_ {

	public static volatile SingularAttribute<Contact, String> ville;
	public static volatile SingularAttribute<Contact, Long> id;
	public static volatile SingularAttribute<Contact, String> nom;
	public static volatile SingularAttribute<Contact, String> prenom;
	public static volatile SingularAttribute<Contact, Integer> age;

	public static final String VILLE = "ville";
	public static final String ID = "id";
	public static final String NOM = "nom";
	public static final String PRENOM = "prenom";
	public static final String AGE = "age";

}

