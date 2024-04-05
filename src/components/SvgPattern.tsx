interface Props {
  color?: string
  size?: string
  strokeWidth?: number
  height?: string
}

export default function SvgBird({}: Props) {
  return (
    <svg
      className="h-full w-full"
      stroke="#D4A373"
      strokeWidth="28"
      viewBox="0 0 1600 1600"
    >
      <defs>
        <pattern id="pattern" x="0" y="0" width="25%" height="25%">
          <line x1="0" y1="0" x2="400" y2="400" strokeLinecap="square" />
          <line x1="0" y1="400" x2="400" y2="0" strokeLinecap="square" />
          <line x1="50" y1="0" x2="200" y2="150" strokeLinecap="square" />
          <line x1="200" y1="150" x2="350" y2="0" strokeLinecap="square" />
          <line x1="50" y1="400" x2="200" y2="250" strokeLinecap="square" />
          <line x1="200" y1="250" x2="350" y2="400" strokeLinecap="square" />
          <line x1="0" y1="150" x2="50" y2="200" strokeLinecap="square" />
          <line x1="0" y1="250" x2="50" y2="200" strokeLinecap="square" />
          <line x1="350" y1="200" x2="400" y2="150" strokeLinecap="square" />
          <line x1="350" y1="200" x2="400" y2="250" strokeLinecap="square" />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#pattern)"
      />
    </svg>
  )
}
