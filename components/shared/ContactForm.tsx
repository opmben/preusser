"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { SERVICE_OPTIONS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen)"),
  telefon: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  leistung: z.string().min(1, "Bitte wählen Sie eine Leistung aus"),
  nachricht: z
    .string()
    .min(20, "Bitte beschreiben Sie Ihr Anliegen (mind. 20 Zeichen)"),
  datenschutz: z.literal(true, {
    error: "Bitte stimmen Sie dem Datenschutz zu",
  }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Log to console (no backend in scope)
    console.log("Kontaktanfrage:", data);
    // Simulate brief delay
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full bg-bg-surface border rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted/60 transition-colors duration-200",
      "focus:outline-none focus:border-accent",
      hasError ? "border-danger" : "border-border hover:border-text-muted/40"
    );

  return (
    <div>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center py-12 px-6 bg-bg-surface border border-accent/30 rounded"
          >
            <CheckCircle size={48} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Anfrage erhalten!
            </h3>
            <p className="text-text-muted text-sm max-w-sm">
              Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich
              bei Ihnen zurück.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-accent text-sm hover:text-accent-hover underline underline-offset-2 transition-colors"
            >
              Weitere Anfrage senden
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Vor- und Nachname <span className="text-danger">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Max Mustermann"
                autoComplete="name"
                className={inputClass(!!errors.name)}
                {...register("name")}
              />
              {errors.name && (
                <FieldError message={errors.name.message} />
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact-telefon"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Telefonnummer <span className="text-danger">*</span>
              </label>
              <input
                id="contact-telefon"
                type="tel"
                placeholder="0 67 42 / ..."
                autoComplete="tel"
                className={inputClass(!!errors.telefon)}
                {...register("telefon")}
              />
              {errors.telefon && (
                <FieldError message={errors.telefon.message} />
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                E-Mail-Adresse <span className="text-danger">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="ihre@email.de"
                autoComplete="email"
                className={inputClass(!!errors.email)}
                {...register("email")}
              />
              {errors.email && (
                <FieldError message={errors.email.message} />
              )}
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="contact-leistung"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Gewünschte Leistung <span className="text-danger">*</span>
              </label>
              <select
                id="contact-leistung"
                className={cn(inputClass(!!errors.leistung), "cursor-pointer")}
                {...register("leistung")}
                defaultValue=""
              >
                <option value="" disabled>
                  Bitte auswählen...
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.leistung && (
                <FieldError message={errors.leistung.message} />
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-nachricht"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Ihre Nachricht <span className="text-danger">*</span>
              </label>
              <textarea
                id="contact-nachricht"
                rows={5}
                placeholder="Beschreiben Sie Ihr Anliegen..."
                className={cn(inputClass(!!errors.nachricht), "resize-y min-h-[120px]")}
                {...register("nachricht")}
              />
              {errors.nachricht && (
                <FieldError message={errors.nachricht.message} />
              )}
            </div>

            {/* Privacy */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  id="contact-datenschutz"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-border bg-bg-surface accent-accent cursor-pointer"
                  {...register("datenschutz")}
                />
                <label
                  htmlFor="contact-datenschutz"
                  className="text-sm text-text-muted cursor-pointer leading-relaxed"
                >
                  Ich habe die{" "}
                  <Link
                    href="/datenschutz"
                    className="text-accent hover:text-accent-hover underline underline-offset-2"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                  <span className="text-danger">*</span>
                </label>
              </div>
              {errors.datenschutz && (
                <FieldError message={errors.datenschutz.message} />
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-sm py-3.5 rounded-sm transition-all duration-200",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-danger text-xs" role="alert">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}
