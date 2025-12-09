"use client";

import { Card, Button } from "antd";
import Image from "next/image";

export interface ProductCardProps {
  image: string;
  title: string;
  color: string;
  price: number;
  onAddToCart?: () => void;
}

export default function ProductCard({
  image,
  title,
  color,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card
      hoverable
      className="rounded-lg shadow-sm border-none overflow-hidden"
      cover={
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      }
    >
      <div className="text-center space-y-1">
        <h3 className="font-medium text-[15px]">{title}</h3>
        <p className="text-gray-500 text-sm">{color}</p>
        <p className="text-[17px] font-semibold">Rp.{price}</p>

        <Button
          type="default"
          block
          className="!mt-3 !font-semibold"
          variant="filled"
          color="default"
          onClick={onAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
