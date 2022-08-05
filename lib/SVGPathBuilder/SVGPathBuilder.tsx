const COMMAND_TYPES = { line: "line", curve: "curve", arc: "arc" };
const POSITION_MODES = { abs: "absolute", rel: "relative" };
const COMMANDS = [
  {
    type: COMMAND_TYPES.line,
    key: "M",
    name: "moveTo",
  },
  {
    type: COMMAND_TYPES.line,
    key: "L",
    name: "lineTo",
  },
  {
    type: COMMAND_TYPES.line,
    key: "H",
    name: "horizontalLineTo",
  },
  {
    type: COMMAND_TYPES.line,
    key: "V",
    name: "verticalLineTo",
  },
  // TODO implement the rest of the commands
  // curveTo: 'C',
  // smoothCurveTo: 'S',
  // quadraticBezierCurve: 'Q',
  // smoothQuadraticBezierCurve: 'T',
  // ellipticalArc: 'A',
];

class PathBuilder {
  data: string;
  mode: string;
  closed: Boolean;
  constructor() {
    this.data = "";
    this.mode = POSITION_MODES.abs;
    this.closed = false;
  }

  reset() {
    this.data = "";
  }

  toString() {
    return this.data;
  }

  closePath() {
    this.data += " Z";
    this.closed = true;
    return this;
  }

  isClosed() {
    return this.closed;
  }
}

export default PathBuilder;
