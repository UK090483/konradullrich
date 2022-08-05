// type PathCommand_Line = { command: "L"; x: number; y: number };
// type PathCommand_Move = { command: "M"; x: number; y: number };

// type Command = { command: string; [k: string]: any };
// type PathCommands = PathCommand[];
// type point = [x: number, y: number];

// class PathCommand {
//   commandString: string;
//   command: Command;
//   type: string = "";

//   constructor(command: string | Command) {
//     this.commandString = "";
//     this.command = { command: "" };
//   }

//   static toString(pathCommands: PathCommands) {
//     return pathCommands.reduce(function (str, c) {
//       return str + c.join(" ") + " ";
//     }, "");
//   }
//   static toCommand(pathString: string) {
//     var pathParts = pathString.split(/[,\s]/).reduce(function (parts, part) {
//       var match = part.match("([a-zA-Z])(.+)");
//       if (match) {
//         parts.push(match[1]);
//         parts.push(match[2]);
//       } else {
//         parts.push(part);
//       }

//       return parts;
//     }, [] as string[]);
//     return pathString;
//   }
// }

// export default class Path {
//   commands: PathCommands;
//   pathString: string;

//   constructor({
//     pathCommands = [],
//     pathString = "",
//   }: {
//     pathCommands?: PathCommands;
//     pathString?: string;
//   }) {
//     this.commands = pathCommands;
//     this.pathString = pathString;
//   }

//   toCommands(pathString: string) {
//     return this.parsePathString(pathString);
//   }

//   toString(pathCommands: PathCommands) {
//     return pathCommands.reduce(function (str, c) {
//       return str + c.join(" ") + " ";
//     }, "");
//   }

//   private parsePathString(pathString: string) {
//     var pathParts = pathString.split(/[,\s]/).reduce(function (parts, part) {
//       var match = part.match("([a-zA-Z])(.+)");
//       if (match) {
//         parts.push(match[1]);
//         parts.push(match[2]);
//       } else {
//         parts.push(part);
//       }

//       return parts;
//     }, [] as string[]);

//     // Group the commands with their arguments for easier handling
//     var commands = pathParts.reduce(function (commands, part) {
//       // @ts-ignore
//       if (parseFloat(part) == part && commands.length) {
//         commands[commands.length - 1].push(part);
//       } else {
//         commands.push([part]);
//       }

//       return commands;
//     }, [] as PathCommands);

//     return commands;
//   }
// }

export {};
