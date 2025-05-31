// "use client";
// import * as motion from "motion/react-client";

// export default function FadeInPage({ children }) {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 0 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.12, ease: "easeOut" }}
//     >
//       {children}
//     </motion.section>
//   );
// }
"use client";

// import { useEffect, useState } from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // Trigger fade-in after component mounts
  //   setIsVisible(true);
  // }, []);

  return (
    <div
    // className={`transition-opacity duration-1000 ease-out ${
    //   isVisible ? "opacity-100" : "opacity-0"
    // }`}
    >
      {children}
    </div>
  );
}
