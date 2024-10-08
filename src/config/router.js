import productRouter from '@/routes/product'; // Ensure this path is correct

export default function (app) {
  app.use('/products', productRouter);
}
