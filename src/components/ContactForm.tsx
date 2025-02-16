/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const onSubmit = async (data: ContactFormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!recaptchaValue) {
      setErrorMessage("Veuillez compléter le reCAPTCHA.");
      return;
    }

    try {
      // Utilisation d'EmailJS pour envoyer l'email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      if (result.status === 200) {
        setSuccessMessage("Message envoyé avec succès !");
        reset();
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erreur lors de l'envoi du message. Réessayez plus tard.");
    }
  };

  console.log('ReCAPTCHA Site Key:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div>
        <label htmlFor="name">Nom</label>
        <input id="name" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>


      <div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={handleRecaptchaChange}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
