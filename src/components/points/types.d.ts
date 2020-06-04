/* eslint-disable camelcase */
declare type Point = {
  id?: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: string;
  longitude: string;
  city: string;
  uf: string;
  items?: number[];
}

declare type PointItems = {
  id?: number;
  point_id: number;
  item_id: number;
}
