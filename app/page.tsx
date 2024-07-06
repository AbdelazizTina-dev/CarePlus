import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar">
        <div className="sub-container max-w-[50%]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={160}
            height={32}
            className="mb-28"
          />
          <PatientForm />
        </div>
      </section>
      <Image
        className="side-img w-[50%]"
        src="/assets/images/onboarding-img.png"
        alt="doctor"
        height={720}
        width={1024}
      />
    </div>
  );
}
