"use client";
import React, { useState } from "react";
import { Button } from "../reusable/button";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../reusable/accordian";

const faqItems = [
  {
    value: "item-1",
    question: "What is Orkeneo?",
    answer:
      "Orkeneo is an AI-powered restaurant optimization platform designed to reduce food waste, forecast prep needs, optimize labor, and streamline operations for multi-location restaurants.",
  },
  {
    value: "item-2",
    question: "How does Orkeneo reduce food waste?",
    answer:
      "Our tool PrepWise uses predictive analytics based on real-time sales, weather forecasts, and historical data to suggest accurate daily food prep quantities.",
  },
  {
    value: "item-3",
    question: "Is Orkeneo suitable for small businesses?",
    answer:
      "While we specialize in supporting multi-location brands, our solutions are scalable and can help smaller operations too—especially those looking to grow efficiently.",
  },
  {
    value: "item-4",
    question: "Does Orkeneo support POS integration?",
    answer:
      "Yes, we support integrations with platforms like Petpooja, Rista, TMBill, and more. This allows seamless syncing of your data for real-time insights.",
  },
  {
    value: "item-5",
    question: "What is Voice Serve?",
    answer:
      "Voice Serve is our AI assistant that can take phone orders, manage reservations, and provide menu recommendations based on customer preferences and weather conditions.",
  },
  {
    value: "item-6",
    question: "Do I need technical knowledge to use Orkeneo?",
    answer:
      "No technical background is needed. Our intuitive dashboard and onboarding process make it easy for any restaurant operator to get started.",
  },
  {
    value: "item-7",
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try Orkeneo free for 30 days. We also offer a complimentary 30-minute onboarding session to get you set up smoothly.",
  },
  {
    value: "item-8",
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan anytime from your account dashboard.",
  },
  {
    value: "item-9",
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. No hidden fees. Billing will stop at the end of your current cycle.",
  },
  {
    value: "item-10",
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can include custom fields like GST, business ID, or billing contact by editing your invoice settings.",
  },
  {
    value: "item-11",
    question: "How does billing work?",
    answer:
      "Billing is done on a monthly or annual basis, depending on your plan. Payments are processed securely via our billing partner.",
  },
  {
    value: "item-12",
    question: "How do I change my account email?",
    answer:
      "Simply go to Settings > Account Info in your dashboard and update your email address. A confirmation link will be sent for verification.",
  },
];

function Faq({ all = false }) {
  const [showAll, setShowAll] = useState(all);

  return (
    <section className="bg-white flex justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-screen-xl sm:py-16 lg:px-6">
        <div className="w-full mb-8 lg:mb-16 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 sm:text-xl">
            Everything you need to know about out product and billing.
          </p>
        </div>

        {faqItems.slice(0, 6).map(({ value, question, answer }) => (
          <div className="" key={value}>
            <Accordion defaultValue={["item-1", "item-2"]}>
              <AccordionItem value={value}>
                <AccordionHeader customIcon>
                  {question}
                  <Plus className="group-data-[active]:rotate-45 transition-transform" />
                </AccordionHeader>
                <AccordionPanel>{answer}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        ))}

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden"
            >
              {faqItems.slice(6).map(({ value, question, answer }) => (
                <Accordion defaultValue={["item-1", "item-2"]} key={value}>
                  <AccordionItem value={value}>
                    <AccordionHeader customIcon>
                      {question}
                      <Plus className="group-data-[active]:rotate-45 transition-transform" />
                    </AccordionHeader>
                    <AccordionPanel>{answer}</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!all && (
          <Button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer block mx-auto mt-10"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        )}

        {/* <div className="">
          <Accordion defaultValue={["item-1", "item-2"]}>
            {faqItems.map(({ value, question, answer }) => (
              <AccordionItem key={value} value={value}>
                <AccordionHeader customIcon>
                  {question}
                  <Plus className="group-data-[active]:rotate-45 transition-transform" />
                </AccordionHeader>
                <AccordionPanel>{answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div> */}
      </div>
    </section>
  );
}

export default Faq;
