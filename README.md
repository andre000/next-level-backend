# next-level-backend

Project made following the [Next Level](https://nextlevelweek.com/) course.

Made with Typescript + Parcel

## Development

In development you can quickly get an environment running using Docker by following these steps:
- Copy `.env.example` file and rename it to `.env`
- Use the `npm run pg:create` command to build the PostgresSQL container
- Get the database ready with the commands `npm run db:migrate` and `npm run db:seed`
- Run `npm run dev` and start coding

## Avaiable commands

- dev
- build

- db:migrate
- db:rollback
- db:seed

- pg:create
- pg:console
- pg:destroy
- pg:start
- pg:stop
