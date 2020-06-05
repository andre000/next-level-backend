import Knex from 'knex';

export async function seed(knex: Knex):Promise<void> {
  await knex('points').insert([
    {
      image: 'https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      name: 'Mercado Imperatriz',
      email: 'contato@mercadoimperatriz.biz',
      whatsapp: '+5511998515010',
      latitude: '-44.59',
      longitude: '22.82',
      city: 'Jundiaí',
      uf: 'SP',
    },
    {
      image: 'https://images.unsplash.com/photo-1545186182-9faaf78480b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      name: 'Loja Muniz',
      email: 'lojamuniz2@bol.com.br',
      whatsapp: '+5522980010077',
      latitude: '-44.01',
      longitude: '21.12',
      city: 'Petrópolis',
      uf: 'RJ',
    },
  ]);

  await knex('point_items').insert([
    { point_id: 1, item_id: 1 },
    { point_id: 1, item_id: 3 },
    { point_id: 2, item_id: 1 },
    { point_id: 2, item_id: 5 },
    { point_id: 2, item_id: 6 },
  ]);
}
