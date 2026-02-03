import { ArrowUpIcon } from "./ArrowUpIcon";
import { CheckIcon } from "./CheckIcon";
import { CreateAgentIcon } from "./CreateAgentIcon";
import { FaceBookFillLogo } from "./FaceBookFillLogo";
import { FileCSVIcon } from "./FileCSVIcon";
import { FileDOCIcon } from "./FileDOCIcon";
import { FilePDFIcon } from "./FilePDFIcon";
import { FilterIcon } from "./FilterIcon";
import { FolderQ1kIcon } from "./FolderQ1kIcon";
import { FullPreviewPlay } from "./FullPreviewPlay";
import { GoogleDriveIcon } from "./GoogleDriveIcon";
import { LinkedinFillLogo } from "./LinkedinFillLogo";
import { PaperClipIcon } from "./PaperClipIcon";
import { RedditLogo } from "./RedditLogo";
import { SquareIconFill } from "./SquareIconFill";
import { TokenIcon } from "./TokenIcon";
import { XtwitterLogo } from "./XtwitterLogo";

const CustomIcons = {
  "custom-arrow-up-icon": ArrowUpIcon,
  "custom-check-icon": CheckIcon,
  "custom-create-agent-icon": CreateAgentIcon,
  "custom-filter-icon": FilterIcon,
  "custom-folder-q1k-icon": FolderQ1kIcon,
  "custon-paper-clip-icon": PaperClipIcon,
  "custom-square-icon-fill": SquareIconFill,
  "custom-token-icon": TokenIcon,
  "custom-google-drive-icon": GoogleDriveIcon,
  "custom-file-csv-icon": FileCSVIcon,
  "custom-file-pdf-icon": FilePDFIcon,
  "custom-file-doc-icon": FileDOCIcon,
  "custom-full-preview-play": FullPreviewPlay,
  "custom-xtwitter": XtwitterLogo,
  "custom-linkedin-fill": LinkedinFillLogo,
  "custom-reddit-fill": RedditLogo,
  "custom-facebook-fill": FaceBookFillLogo,
};

export type CustomIconName = keyof typeof CustomIcons;

export { CustomIcons };
