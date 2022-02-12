nextjs-image-generation is a POC on how to do server-side image generation.

This article has been implemented based on the following blog post.

https://ji23-dev.com/blogs/nextjs-ogp

## Getting Started

First, run the development server:

```bash
git clone https://github.com/yammerjp/nextjs-image-generation.git
cd nextjs-image-generation
npm install
npm run dev
```

Show the page `http://localhost:3000`, or download image

```bash
curl localhost:3000/api/recharts-to-image.svg --output recharts-to-image.svg
curl localhost:3000/api/recharts-to-image.png --output recharts-to-image.png
```

Open recharts-to-image.png, to confirm server-side image generation.

## Sample Image

This is the image with server-side image generation.

### PNG
![](./generation-sample/recharts-to-image.png)

### SVG
![](./generation-sample/recharts-to-image.svg)


