import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import OpenSourceView from "@/views/open-source";

export const metadata = {
  title: "Open Source",
  description: "Notes on the software behind this site.",
};

export default function Page() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <OpenSourceView />
    </>
  );
}
