import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[50%]">
          <Image src="/assets/logo.png" alt="logo" width={160} height={32}/>
        </div>
      </section>
      <Image
        className="side-img w-[50%]"
        src="/assets/young-doctor.png"
        alt="doctor"
        height={720}
        width={1024}
      />
    </div>
  );
}
