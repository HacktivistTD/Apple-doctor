import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
import { Button } from "@nextui-org/react";

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
  // Booking handler function
  const handleBooking = () => {
    // Add your booking logic here (e.g., navigate to booking page, open a modal, etc.)
    console.log("Booking a time...");
  };

  return (
    <div className="mx-auto pt-10">
      {/* First Section */}
      <Section>
        <main className="container mx-auto pt-40 bg-[url('/images/service.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-fixed -z-10">
          <div className="bg-black bg-opacity-70 rounded-lg text-white p-10 ">
            <p className="text-center text-3xl font-bold mb-6">
              Our Apple Accessories Repair Services Include
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              {/* Repair Service Items */}
              {[
                { name: "AirPods Repair", img: "/images/airpods.png" },
                { name: "Apple Watch Repair", img: "/images/apple-watch.png" },
                { name: "MagSafe Charger Repair", img: "/images/magsafe-charger.png" },
                { name: "Apple Pencil Repair", img: "/images/apple-pencil.png" },
                { name: "MacBook & Mac mini Repair", img: "/images/macbook.png" },
                { name: "iPhone Repair", img: "/images/iphone.png" },
              ].map((service) => (
                <div
                  key={service.name}
                  className="col-span-1 bg-black bg-opacity-70 rounded-lg p-4 hover:bg-purple-800 hover:bg-opacity-10 hover:shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <p className="text-lg font-semibold mb-2 text-center">
                    {service.name}
                  </p>
                  <img
                    src={service.img}
                    alt={`Service: ${service.name}`}
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </Section>

      {/* Booking Button */}
      <div className="text-center mt-10">
        <Button onClick={handleBooking} color="primary" size="lg" className="mt-4">
          Book a time
        </Button>
      </div>
    </div>
  );
}
