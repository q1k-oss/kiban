import { ArrowUpIcon } from "./ArrowUpIcon";
import { CheckIcon } from "./CheckIcon";
import { CreateAgentIcon } from "./CreateAgentIcon";
import { FilterIcon } from "./FilterIcon";
import { FolderQ1kIcon } from "./FolderQ1kIcon";
import { PaperClipIcon } from "./PaperClipIcon";
import { SquareIcon } from "./SquareIcon";
import { TokenIcon } from "./TokenIcon";

const CustomIcons = {
  ArrowUpIcon,
  CheckIcon,
  CreateAgentIcon,
  FilterIcon,
  FolderQ1kIcon,
  PaperClipIcon,
  SquareIcon,
  TokenIcon,
};


// const CustomIconDict = {
//   "q1k-ArrowUpIcon": ArrowUpIcon,
//   "q1k-CheckIcon": CheckIcon,
//   "q1k-CreateAgentIcon": CreateAgentIcon,
//   "q1k-FilterIcon": FilterIcon,
//   "q1k-FolderQ1kIcon": FolderQ1kIcon,
//   "q1k-PaperClipIcon": PaperClipIcon,
//   "q1k-SquareIcon": SquareIcon,
//   "q1k-TokenIcon": TokenIcon,
// }

export type CustomIconName = keyof typeof CustomIcons;

export { CustomIcons };