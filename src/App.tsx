import { TaskCard } from "./components/tasks/TaskCard";
import { mockTasks } from "./data/mockTasks";
import { StatCard } from "./components/common/StatCard";
function App() {
  return (
    <main
      className="min-h-screen
    bg-slate-100 p-8"
    >
      <h1>Task Flow</h1>

<div className="grid gap-4 md-grid-cols-2">
 <StatCard
 title=" completed"
 value={2}
 description="task completed "
 />

 
</div>

    </main>
  );
}

export default App;
