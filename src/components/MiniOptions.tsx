import { useState } from "react"
import { Link } from "react-router-dom"

const fontArray = [
  "font-ephesis",
  "font-italianno",
  "font-playball",
  "font-allura",
  "font-playfair",
  "font-libre",
  "font-source",
  "font-cormorant",
  "font-newsreader",
]
interface Props {
  text?: string
  link?: string
}

export default function MiniOptions({ text = "ALT", link = "/alt" }: Props) {
  const [show, setShow] = useState(false)

  function handleMouseEnter() {
    setShow(true)
  }

  function handleMouseLeave() {
    // setShow(false)
    console.log("nothing")
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 m-5 flex flex-col items-start">
        {show &&
          fontArray.map((item) => {
            return (
              <div className="w-full bg-white p-3 text-left text-xl">
                <p className={item}>Home Care Concierge - {item}</p>
              </div>
            )
          })}

        <Link to={link}>
          <button
            className="focus-visible cursor-pointer rounded-full border-4 bg-prime px-6 py-3 font-medium text-light opacity-10 transition hover:opacity-100"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {text}
          </button>
        </Link>
      </div>
    </>
  )
}
