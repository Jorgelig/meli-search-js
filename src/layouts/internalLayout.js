import Breadcrum from "@/components/atom/Breadcrum";

export default function InternalLayout({ children }) {

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-span-10">
        <Breadcrum  />
      </div>
      <div className="col-start-2 col-span-10">
        <main className="bg-white-default">
          {children}
        </main>
      </div>
    </div>
  );
};