import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";


interface SectionProps {
  children: ReactNode; // Specify that children can be any valid React node
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null); // Use HTMLElement type for the ref
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Service() { // Corrected the function name to "Service"
  return (
    <>
      <Section>
        <main className="container mx-auto py-10 bg-[url('/images/service.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-fixed">
          <div className="bg-black bg-opacity-70 rounded-lg text-white p-8">
            <p className="text-center text-3xl font-bold mb-6">
              Our Apple Accessories Repair Services Include
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              <div className="col-span-1 bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2">AirPods Repair</p>
                <p>
                  Experiencing sound or connectivity issues with your AirPods? Whether it's a faulty charging case or one side isn’t working, we’ve got you covered. We provide battery replacements, sound quality checks, and comprehensive diagnostics to get your AirPods functioning like new.
                </p>
              </div>
              <div className="col-span-1 bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2">Apple Watch Repair</p>
                <p>
                  Is your Apple Watch screen cracked or the battery not lasting as long? Our team can handle screen repairs, battery replacements, and even fix water damage issues, ensuring your watch is back on your wrist in no time.
                </p>
              </div>
              <div className="col-span-1 bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">MagSafe Charger Repair</p>
                <p>
                  If your MagSafe Charger isn’t working properly or charging slowly, we offer diagnostic and repair services to restore its full functionality.
                </p>
              </div>
              <div className="col-span-1 bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2">Apple Pencil Repair</p>
                <p>
                  If your Apple Pencil is unresponsive or not charging, our experts can troubleshoot and repair the connection or charging port issues, helping you get back to your creative tasks.
                </p>
              </div>
            </div>
          </div>
        </main>
      </Section>
      <Section>
        <div>
          <p className="mt-8 text-purple-600 font-semibold text-center text-3xl">
            Why Choose Apple Doctor for Your Apple Accessories Repair?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-6 text-white">
            <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
              <p className="text-lg font-semibold mb-2 text-center">Certified Technicians:</p>
              <p>Skilled and trained to handle all types of Apple accessory repairs.</p>
            </div>
            <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
              <p className="text-lg font-semibold mb-2 text-center">Original Parts:</p>
              <p>We use only genuine Apple parts to ensure the quality and longevity of your accessories.</p>
            </div>
            <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
              <p className="text-lg font-semibold mb-2 text-center">Quick Turnaround Time:</p>
              <p>Our technicians work efficiently to minimize downtime.</p>
            </div>
            <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
              <p className="text-lg font-semibold mb-2 text-center">Affordable Pricing:</p>
              <p>We provide transparent and competitive pricing for all repairs.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>in</Section>
      <Section>view!</Section>
    </>
  );
}
