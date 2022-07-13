// type CommandItem = { type: string; [k: string]: any };

// class Command {
//   commandString: string;
//   args: CommandItem;
//   type: string = "";

//   constructor(command: string | CommandItem) {
//     if (typeof command === "string") {
//       this.commandString = command;
//       this.args = this._toCommand(command);
//     } else {
//       this.commandString = this._toString(command);
//       this.args = command;
//     }
//   }

//   private _toString(pathCommands: CommandItem) {
//     return `${this.type} `;
//     return pathCommands.reduce(function (str, c) {
//       return str + c.join(" ") + " ";
//     }, "");
//   }
//   private _toCommand(pathString: string) {
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
//     return pathString as CommandItem;
//   }
// }

// export default Command;

export {};
