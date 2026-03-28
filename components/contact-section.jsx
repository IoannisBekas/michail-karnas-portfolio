"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoaderCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      setMessage("Add NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local before using the form.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setStatus("success");
      setMessage("Message sent successfully. Michail will be in touch.");
      reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or use email instead.");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 page-gutter py-16 md:scroll-mt-36 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="section-frame rounded-[2.25rem] px-6 py-12 md:px-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow accent-dot">Contact</p>
              <h2 className="mt-5 max-w-md font-display text-4xl tracking-[-0.04em] text-foreground text-balance md:text-5xl">
                Got a vision? Let’s build the decision layer for it.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                Open to senior analytics roles, advisory work, and focused system
                redesigns.
              </p>

              <div className="mt-10 space-y-3">
                <Link
                  href="mailto:Michail_Karnas@hotmail.com"
                  className="contact-detail break-words hover:text-accent"
                >
                  Michail_Karnas@hotmail.com
                </Link>
                <p className="break-words text-lg leading-7 text-muted md:text-xl">
                  +44 7519 273839
                </p>
                <p className="text-sm leading-7 text-muted">
                  LinkedIn, portfolio references, and certifications are now
                  available directly.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/michail-k-a4b76a318/"
                    target="_blank"
                    rel="noreferrer"
                    className="soft-pill inline-flex items-center rounded-full px-4 py-2.5 text-base font-medium text-foreground hover:-translate-y-0.5 hover:border-black/20"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="field-control mt-2 w-full rounded-[1.2rem] border border-black/10 bg-white text-foreground"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required." })}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-accent">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="field-control mt-2 w-full rounded-[1.2rem] border border-black/10 bg-white text-foreground"
                    placeholder="you@company.com"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address."
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-accent">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="field-control mt-2 w-full rounded-[1.2rem] border border-black/10 bg-white text-foreground"
                  placeholder="Tell me about the project, role, or challenge."
                  {...register("message", { required: "Message is required." })}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-accent">{errors.message.message}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black bg-foreground px-6 py-3 text-sm text-background disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                >
                  {status === "loading" ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Send message
                </motion.button>

                {message && (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-accent" : "text-muted"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
