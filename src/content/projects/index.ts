import type { ProjectDoc } from "./types";
import { somescript } from "./somescript";
import { uptodatestock } from "./uptodatestock";
import { zyplus } from "./zyplus";
import { somemath } from "./somemath";
import { memize } from "./memize";
import { fanslides } from "./fanslides";

export type { ProjectDoc, DocSection, DocBlock, DocImage } from "./types";

/** Order = order in the sidebar and in the document. */
export const PROJECT_DOCS: ProjectDoc[] = [
  somescript,
  uptodatestock,
  zyplus,
  somemath,
  memize,
  fanslides,
];
