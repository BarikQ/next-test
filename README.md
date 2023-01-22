# README

### [DEPLOY](https://next-test-kohl-nu-71.vercel.app/)

- Попрописывал бы типы для функций/пропсов и т.д. (не прописал т.к. экономил время);
- Добавление scss переменных для размеров экранов, элементов интерфейса, отступов. + в переменные все остальные цвета и шрифты в миксины или что-то такое.
  Не добавлял из экономии времени, т.к. они нужны были всего в нескольких местах;
- Вынес инпуты сайдбара в отдельные компоненты, и ещё некоторые элементы UI (тэги на айтемах, кнопки и т.д.), не вынес, т.к. не хотел тратить на это время; 
- Упростил бы взаимодействие с URL (query params), но пока не понимаю как это сделать лучше;
- Лоадер;
- Дублировал рендер айтемов по 4 раза, чтобы увидеть скроллбар, но решил так и оставить в конце;
- Возможно добавить Error Boundaries при расширении проекта;
- Затратил 7 часов +-;
- Оставил часть бойлерплейта (т.к. что-то забыл удалить) и закомментированный оставил, т.к. хочу потом ещё к ним вернуться.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
