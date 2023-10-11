import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center gap-2 px-11 py-5">
          <h1 className="font-semibold  text-3xl px-12 text-center tracking-tight text-gra900">
            At BGIFT Institute of Science & Technology, we take great pride in
            our commitment to education. We value our students and believe in
            providing them with supportive learning environment. Our mission is
            to empower our students with knowledge, skills, and opportunities
          </h1>
          <p className="text-lg">
            {" "}
           " Welcome to a place where your future is our priority."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 place-content-center w-full h-full">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl underline underline-offset-4 font-medium">About Us</h3>
            <p className="tracking-tight leading-6 text-sm max-w-[80ch]">
              BIST, an acronym for the esteemed BGIFT Institute of Science &
              Technology, proudly boasts a rich history of success since its
              establishment in 2008. Our affiliation with the prestigious
              National University is a testament to our commitment to providing
              high-quality education. Under the National University's banner,
              BIST offers a range of enriching four-year B.Sc. (Hons.) degree
              programs. Students can choose from a selection of exciting
              subjects including Apparel Manufacture & Technology (AMT), Fashion
              Design & Technology (FDT), and Bachelor of Business Administration
              (BBA). This extensive offering is a response to the growing demand
              for advanced education in these fields. But that's not all. BIST
              also enjoys affiliation with the esteemed Bangladesh Technical
              Education Board (BTEB). Here, our institution welcomes numerous
              students pursuing diploma courses in engineering across a variety
              of captivating subjects. The diverse range of subjects includes
              Computer Technology, Electrical Technology, Electronics
              Technology, Civil Technology, Mechanical Technology, Automobile
              Technology, Power Engineering Technology, Textile Technology, and
              Garments Design and Pattern making Technology. Our educational
              approach is not static; we constantly strengthen and enhance it.
              BIST's journey began with just a handful of students, and today,
              we are proud to have nurtured a thriving community with thousands
              of enthusiastic learners. To date, we have seen over 800 graduates
              emerge from our institution, each of them securing promising
              positions in their respective fields. At BIST, we are passionately
              dedicated to nurturing the growth of human resources within the
              ready-made garment, textile, and allied sectors of Bangladesh. We
              aspire to establish ourselves as a 'center of excellence' in the
              realms of study, research, and development, with a steadfast
              commitment to serving our nation
            </p>
          </div>
          <div className="rounded-md  overflow-hidden">
            <Image
              src="/assets/aboutus.jpg"
              width={500}
              height={450}
              alt="about us"
            />
          </div>
        </div>
      </div>
    </>
  );
}
