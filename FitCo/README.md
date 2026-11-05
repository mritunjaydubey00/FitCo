# FitCo

FitCo is a React application built with Vite and served in production by Express.

## Development

```sh
npm install
npm run dev
```

The development command starts Vite and the Express API together. Vite proxies
`/api` requests to Express on port `3001`.

## Production

```sh
npm run build
npm start
```

Express serves the generated `dist` files and the API. Set `PORT` to change the
default server port (`3001`).

## API

- `GET /api/health` checks that the Express API is running.
- `POST /api/gym-registrations` validates the gym name, owner, address, phone,
  and email fields.

Supabase persistence is not configured yet, so valid registrations currently
receive a `503` response and are not saved. Connect server-side Supabase
credentials and persistence before accepting real registrations.
