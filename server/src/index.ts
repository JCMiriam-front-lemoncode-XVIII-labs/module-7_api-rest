import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { characters } from './mock-data.js';
import { CharacterListResponse } from './model.js';

let db = {
  characters,
};

const app = new Hono();
app.use(logger());

app.use('/api/*', cors());

app.get('/api/character', async (context) => {
  const pageParam = context.req.query('page');
  const nameParam = context.req.query('name') ?? '';

  const page = Number(pageParam) > 0 ? Number(pageParam) : 1;
  const pageSize = 3;

  const filteredCharacters = db.characters.filter((character) =>
    character.name.toLowerCase().includes(nameParam.toLowerCase())
  );

  const count = filteredCharacters.length;
  const pages = Math.ceil(count / pageSize) || 1;
  const safePage = Math.min(page, pages);

  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  const paginatedCharacters = filteredCharacters.slice(start, end);

  const response: CharacterListResponse = {
    info: {
      count,
      pages,
      next: safePage < pages ? safePage + 1 : null,
      prev: safePage > 1 ? safePage - 1 : null,
    },
    results: paginatedCharacters,
  };
  return context.json(response);
});

app.get('/api/character/:id', (context) => {
  return context.json(
    db.characters.find((c) => c.id === Number(context.req.param('id')))
  );
});

app.put('/api/character/:id', async (context) => {
  const id = Number(context.req.param('id'));
  const character = await context.req.json();
  db.characters = db.characters.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );
  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
