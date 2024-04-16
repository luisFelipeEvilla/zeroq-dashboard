# ZeroQ Centro de mando

## Preview
https://www.loom.com/share/d0f00eaf3beb4005afce6ce6ada9eb84?sid=86a458ef-92d6-4b0b-b21b-f5674ce0f159

### Desktop Device
![image](https://github.com/luisFelipeEvilla/zeroq-dashboard/assets/35440641/8c9e2dcb-da83-41cb-b7dc-3b5050e9aa76)

### Tablet Device
![localhost_3000_ (2)](https://github.com/luisFelipeEvilla/zeroq-dashboard/assets/35440641/ca2a897d-5396-4578-a270-6e4cc4c9e28a)

### Mobile Device
![localhost_3000_](https://github.com/luisFelipeEvilla/zeroq-dashboard/assets/35440641/dbd0b9b9-459b-4ede-967c-a2bf70d3432d)

## Technologies

1. Nextjs 14.2.1
2. TailwindCss
3. TypeScript
4. Jest
5. React Testing Library

## Getting Started

First, setup your enviroment variables. You can create a `.env` file in the app root directory or setup manually.

Your `.env` file should look like this:

``` dotenv
// api base url
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

after this, you should install all dependencies with the following command:

```bash
npm install
```

### Development
run the following command to start your development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
###  Production
Run the build command
```bash
npm run build
```

Run start command, to start the production server
```bash
npm run start
```

## Run Tests
To run unit and integration testing you should run the folling command
```bash
npm run test
```



