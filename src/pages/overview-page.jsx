import Header from "@/components/header";
import KPI from "@/components/kpi";
import ProjecterVisitors from "@/components/projected-visitors";
import ToDoList from "@/components/to-do-list";

export default function OverviewPage() {
  return (
    <>
      <Header />
      <main className="font-ubuntu container mx-auto flex min-h-[50vh] items-center justify-center text-base">
        <section className="my-4 h-full w-full">
          {/* Overview header */}
          <div className="mb-2 flex h-fit w-full flex-col justify-between md:mb-4 md:flex-row md:items-end">
            <div className="mb-2 md:mb-0">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Overview
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                Welcome to Makisig Clothing
              </p>
            </div>
          </div>

          {/* KPIs */}
          <KPI />

          {/* visitors projection and to do list */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-8">
            <ProjecterVisitors />
            <ToDoList />
          </div>
        </section>
      </main>
    </>
  );
}
