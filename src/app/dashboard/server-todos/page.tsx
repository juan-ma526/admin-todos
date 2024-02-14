export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de Server Todos",
  description: "Listado de Todos",
};

export default async function ServerActionsPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  console.log("first");

  return (
    <>
      <span className="text-3xl mb-10 ">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
