import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import GlassCard from "@/components/GlassCard";
import CopyEmail from "@/components/CopyEmail";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
export const metadata = { title: "Contact" };
export default function Contact() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      extra: <CopyEmail email={profile.email} />,
    },
    { icon: Linkedin, label: "LinkedIn", value: "kausik-k-bhadra-phd", href: profile.linkedin },
    { icon: MapPin, label: "Location", value: profile.location },
  ];
  return (
    <>
      <PageHeading icon={Send} title="Contact" subtitle="Open to research, advisory and speaking opportunities" />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, label, value, href, extra }) => (
          <GlassCard key={label} className="flex flex-col items-center gap-2 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white">
              <Icon size={22} />
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">{label}</p>
            {href ? (
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="break-all font-medium hover:underline"
              >
                {value}
              </a>
            ) : (
              <p className="font-medium">{value}</p>
            )}
            {extra}
          </GlassCard>
        ))}
      </div>
      <GlassCard className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">Send a message</h2>
        <ContactForm email={profile.email} />
      </GlassCard>
    </>
  );
}
