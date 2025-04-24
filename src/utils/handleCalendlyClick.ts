/* eslint-disable @typescript-eslint/no-explicit-any */
/* utils/handleCalendlyClick.ts */
export const handleCalendlyClick = () => {
  const calendlyUrl =
    "https://calendly.com/clarisse-freelance/appel-decouverte";

  if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion();        // déclenche la conversion
  }
  window.open(calendlyUrl, "_blank", "noopener,noreferrer");
};
