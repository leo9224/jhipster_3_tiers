export interface IContact {
  id?: number;
  nom?: string | null;
  prenom?: string | null;
  age?: number | null;
  ville?: string | null;
}

export const defaultValue: Readonly<IContact> = {};
