/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, recaptcha } = await req.json();

    if (!name || !email || !message || !recaptcha) {
      return NextResponse.json({ error: "Tous les champs sont obligatoires, y compris le reCAPTCHA." }, { status: 400 });
    }

    const recaptchaSecret = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha}`;

    const recaptchaResponse = await fetch(recaptchaUrl, { method: "POST" });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ error: "La vérification reCAPTCHA a échoué." }, { status: 400 });
    }

    console.log("📩 Nouveau message reçu :", { name, email, message });

    return NextResponse.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
