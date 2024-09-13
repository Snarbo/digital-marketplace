'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/payload-types';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const handleButton = () => {
    addItem(product);
    setIsSuccess(true);
  };

  return (
    <Button className="w-full" size="lg" onClick={handleButton}>
      {isSuccess ? 'Adding...' : 'Add to cart'}
    </Button>
  );
};

export default AddToCartButton;
