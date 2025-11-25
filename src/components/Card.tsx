"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Cards {
    id: number
    titleTop: string
    titleMain: string
    desc: string
    action: string
    image: string
}

export default function Cards({ cards }: { cards: Cards[] }) {
  return (
    <>
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
        >
          <div className="w-full h-56 relative">
            <Image
              src={card.image}
              alt={card.titleMain}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 space-y-2">
            <p className="text-sm text-neutral-500">{card.titleTop}</p>

            <h2 className="text-xl font-semibold text-neutral-900">
              {card.titleMain}
            </h2>

            <p className="text-neutral-600">{card.desc}</p>

            <button className="mt-4 flex items-center gap-1 font-medium text-black hover:underline">
              {card.action}
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      ))}
    </>
  );
}
