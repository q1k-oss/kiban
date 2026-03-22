import { AiStars } from "./AiStars";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { CheckIcon } from "./CheckIcon";
import { CreateAgentIcon } from "./CreateAgentIcon";
import { DropboxIcon } from "./DropboxIcon";
import { EmptyDocument } from "./EmptyDocument";
import { FaceBookFillLogo } from "./FaceBookFillLogo";
import { FileCSVIcon } from "./FileCSVIcon";
import { FileDOCIcon } from "./FileDOCIcon";
import { FilePDFIcon } from "./FilePDFIcon";
import { FileTXTIcon } from "./FileTXTIcon";
import { FilterIcon } from "./FilterIcon";
import { FolderQ1kIcon } from "./FolderQ1kIcon";
import { FullPreviewPlay } from "./FullPreviewPlay";
import { GoogleDriveIcon } from "./GoogleDriveIcon";
import { JiraIcon } from "./JiraIcon";
import { LinkedinFillLogo } from "./LinkedinFillLogo";
import { PaperClipIcon } from "./PaperClipIcon";
import { Q1KLogo } from "./Q1KLogo";
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
  "custom-paper-clip-icon": PaperClipIcon,
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
  "custom-q1k-logo": Q1KLogo,
  "custom-ai-stars": AiStars,
  "custom-file-txt-icon": FileTXTIcon,
  "custom-empty-doc-icon": EmptyDocument,
  "custom-jira-icon": JiraIcon,
  "custom-dropbox-icon":DropboxIcon
};

export type CustomIconName = keyof typeof CustomIcons;

export { CustomIcons };
