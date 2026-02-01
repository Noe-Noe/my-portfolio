import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="text-zinc-300/80">This page went missing.</p>
      <Link className="text-zinc-200 underline" to="/">Go home</Link>
    </div>
  );
}
