This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Push app to GitHub "Packages"

- Build the Docker image with `docker build . -t ghcr.io/adriann1998/profile-pilot:latest`
- (optional) test run the image locally `docker run -p 3000:3000 ghcr.io/adriann1998/profile-pilot:latest`
- (if not already been done) login to Github with docker `docker login ghcr.io`
- push to Github `docker push ghcr.io/adriann1998/profile-pilot:latest`
- to pull on remote repo do `docker run -d -p 3000:3000 ghcr.io/adriann1998/profile-pilot:latest`