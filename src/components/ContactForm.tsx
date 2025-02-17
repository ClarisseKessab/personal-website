/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const contactSchema = z.object({
  firstname: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().regex(/^\+?[0-9\s-]{8,15}$/, "Numéro de téléphone invalide").optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);


  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ;
  if (!siteKey) {
    console.error("La clé reCAPTCHA est manquante !");
    return <p>Erreur : La clé reCAPTCHA est manquante.</p>;
  }

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
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 30000) {
      setErrorMessage("Vous devez attendre avant de soumettre à nouveau.");
      return;
    }

    setSuccessMessage(null);
    setErrorMessage(null);

    if (!recaptchaValue) {
      setErrorMessage("Veuillez compléter le reCAPTCHA.");
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          firstname: data.firstname,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      if (result.status === 200) {
        setSuccessMessage("Message envoyé avec succès !");
        reset();
        setLastSubmitTime(now);
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erreur lors de l'envoi du message. Réessayez plus tard.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="identity-form">
        <div className="form-contact">
          <label htmlFor="firstname" className="label-contact">Prénom*</label>
          <input id="firstname" {...register("firstname")} placeholder="Prénom" className="exemple-contact"/>
          {errors.firstname && <p className="error">{errors.firstname.message}</p>}
        </div>
        <div className="form-contact">
          <label htmlFor="name" className="label-contact">Nom*</label>
          <input id="name" {...register("name")} placeholder="Nom" className="exemple-contact"/>
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
      </div>
      <div className="form-contact">
        <label htmlFor="email" className="label-contact">Email*</label>
        <input id="email" type="email" {...register("email")} placeholder="Email" className="exemple-contact"/>
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="form-contact">
        <label htmlFor="phone" className="label-contact">Téléphone</label>
        <input id="phone" type="phone" {...register("phone")} placeholder="Téléphone" className="exemple-contact"/>
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <div className="form-contact">
        <label htmlFor="message" className="label-contact">Message*</label>
        <textarea id="message" {...register("message")} placeholder="Message" className="exemple-contact"/>
        {errors.message && <p className="error">{errors.message.message}</p>}
        <p className="criteres-p">Min. 120 caractères</p>
      </div>

      <div>
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleRecaptchaChange}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
