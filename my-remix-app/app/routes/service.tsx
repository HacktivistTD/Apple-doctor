import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

// Section component with typing for children
interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Service() {
  return (
    <>
      {/* First Section */}
      <Section>
        <main className="container mx-auto pt-20 bg-[url('/images/service.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-fixed">
          <div className="bg-black bg-opacity-70 rounded-lg text-white p-8">
            <p className="text-center text-3xl font-bold mb-6">
              Our Apple Accessories Repair Services Include
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">AirPods Repair</p>
                <img src="/images/airpods.png" alt="AirPods" />
              </div>
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Apple Watch Repair</p>
                <img src="/images/apple-watch.png" alt="Apple Watch" />
              </div>
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">MagSafe Charger Repair</p>
                <img src="/images/magsafe-charger.png" alt="MagSafe Charger" />
              </div>
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Apple Pencil Repair</p>
                <img src="/images/apple-pencil.png" alt="Apple Pencil" />
              </div>
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">MacBook Mac mini Repair</p>
                <img src="/images/macbook.png" alt="MacBook" />
              </div>
              <div className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">iPhone Repair</p>
                <img src="/images/iphone.png" alt="iPhone" />
              </div>
            </div>
          </div>
        </main>
      </Section>

      {/* Second Section */}
      <Section>
        <main className="container mx-auto pt-10 bg-[url('/images/service.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-fixed">
          <div className="bg-black bg-opacity-70 rounded-lg text-white p-8">
            <p className="text-center text-3xl font-bold mb-6">
              Why Choose Apple Doctor for Your Apple Accessories Repair?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-6">
              <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Certified Technicians</p>
                <p>Skilled and trained to handle all types of Apple accessory repairs.</p>
              </div>
              <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Original Parts</p>
                <p>We use only genuine Apple parts to ensure quality and longevity of your accessories.</p>
              </div>
              <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Quick Turnaround Time</p>
                <p>Our technicians work efficiently to minimize downtime.</p>
              </div>
              <div className="bg-black rounded-lg p-4 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition duration-300">
                <p className="text-lg font-semibold mb-2 text-center">Affordable Pricing</p>
                <p>We provide transparent and competitive pricing for all repairs.</p>
              </div>
            </div>
          </div>
        </main>
      </Section>

      {/* Additional Sections for content */}
      <Section>
        <div className="text-white">More content</div>
      </Section>
      <Section>is</Section>
      <Section>visible!</Section>
    </>
  );
}
