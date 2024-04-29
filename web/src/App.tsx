import '@/styles/global.css'
import { Habits } from "@/components/Habits";

function App() {
  return (
    <div>
      <Habits completed={3} />
      <Habits completed={4} />
      <Habits completed={5} />
    </div>
  );
}

export default App;
