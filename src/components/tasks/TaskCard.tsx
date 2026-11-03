import type { Task } from "../../types/task";

interface taskCardProps {
  task: Task;
}

const priorityStyles = {
  low: "bg-slate-100 text-slate-600",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
};

const statusLabels = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Completed",
};

const priorityLables = {
  low: "low",
  medium: "medium",
  high: "high",
};

export function TaskCard({ task }: taskCardProps) {
  return (
    <article className=" rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900">{task.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{task.description}</p>
        </div>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium $ 
                    {priorityStyles[task.priority]}`}
      >{priorityLables[task.priority]}</span>

      <div className=" mb-4 flex flex-wrap gap-2 ">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm ">
        <div>
          <p className="text-xs text-slate-400 "> Assignee</p>
          <p className="font-medium text-slate-700">{task.assignee}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400"> Due Date </p>
          <p className="font-medium text-slate-700">{task.dueDate}</p>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xs text-slate-500">
          Status:{statusLabels[task.status]}
        </span>
      </div>
    </article>
  );
}
