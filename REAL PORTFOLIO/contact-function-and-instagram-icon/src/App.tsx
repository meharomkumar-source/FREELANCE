import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-6">
      <div className="w-full max-w-md">
        <Contact />
      </div>
    </div>
  );
}
