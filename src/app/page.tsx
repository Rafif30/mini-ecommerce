'use client'

import Image from 'next/image';
import Navbar from "@/src/components/Navbar";
import Cards from "@/src/components/Card"
import Products from "@/src/components/Products"
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { prefixBasePath } from '@/src/utils';

const cards = [
  {
    id: 1,
    titleTop: "Speed",
    titleMain: "Fast checkout",
    desc: "Get what you want quickly",
    action: "Explore",
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 2,
    titleTop: "Simple",
    titleMain: "Easy navigation",
    desc: "Find anything without hassle",
    action: "Browse",
    image: `${prefixBasePath('/feature-image2.png')}`,
  },
];

const listProducts = [
  {
    id: 1,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 2,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 3,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 4,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 5,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
  {
    id: 6,
    title: "Speed",
    color: "Fast checkout",
    price: 30000,
    image: `${prefixBasePath('/feature-image1.png')}`,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
                Find what you need, fast and simple
              </h1>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
                Browse our catalog of quality products. Everything is here, waiting for you to discover it.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-primary-50 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Shop
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800/5 text-primary-800 rounded-lg hover:border-primary-800 transition-colors shadow-lg hover:shadow-xl hover:cursor-pointer transition-colors">
                  Learn More
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={prefixBasePath('/hero_image.png')}
                    alt="Developer workspace"
                    className="w-full h-full object-cover rounded-xl"
                    width={800}
                    height={800}
                    loading='eager'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="quality" className="mx-auto px-6 lg:px-8 bg-neutral-50 pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-neutral-900 font-bold max-w-2xl mx-auto mb-4">
              Quality
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Trusted Products
            </h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-4">
              We stock only what matters
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            <Cards cards={cards} />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="grid grid-cols-1 md:grid-cols-2 col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
                <div className="h-[380px] md:h-full">
                  <Image
                    src={prefixBasePath('/feature-image3.png')}
                    alt="Woman working"
                    className="object-fit h-full w-full"
                    width={800}
                    height={800}
                    loading='eager'
                  />
                </div>
              </div>
               <div className="p-10 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-700">
                    Everything organized right
                  </p>
                  <h3 className="text-3xl font-bold mt-3 leading-tight">
                    Clean design, clear choices
                  </h3>
                  <p className="text-gray-500 mt-4">
                    No confusion, just results
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 font-medium text-black hover:underline"
                  >
                    Discover
                    <ArrowRight size={16} />
                  </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="products" className="mx-auto px-6 lg:px-8 bg-neutral-50 pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-neutral-900 font-bold max-w-2xl mx-auto mb-4">
              Featured
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Products
            </h2>
            <p className="text-lg text-neutral-900 max-w-2xl mx-auto mb-4">
              Start with what matters most
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {listProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl border border-neutral-200 overflow-hidden shadow-sm"
              >
                <Products 
                  title={product.title}
                  price={product.price}
                  color={product.color}
                  image={product.image}
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center py-6 space-y-1">
            <Button
              type="default"
              className="!mt-3 !font-semibold"
              variant="filled"
              color="default"
            >
              View All
            </Button>
          </div> 
        </div>
      </section>
    </div>
  );
}
