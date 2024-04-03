import { Link } from "react-router-dom"

export default function MiniOptions() {
  return (
    <>
      <div className="fixed bottom-0 left-0 m-5">
        <Link to="/alt">
          <button className="focus-visible cursor-pointer rounded-full border-4 bg-prime px-6 py-3 font-medium text-light opacity-10 transition hover:opacity-100">
            ALT
          </button>
        </Link>
      </div>
    </>
  )
}
