import { Link } from "react-router-dom"

interface Props {
  text?: string
  link?: string
}

export default function MiniOptions({ text = "ALT", link = "/alt" }: Props) {
  return (
    <>
      <div className="fixed bottom-0 left-0 m-5">
        <Link to={link}>
          <button className="focus-visible cursor-pointer rounded-full border-4 bg-prime px-6 py-3 font-medium text-light opacity-10 transition hover:opacity-100">
            {text}
          </button>
        </Link>
      </div>
    </>
  )
}
