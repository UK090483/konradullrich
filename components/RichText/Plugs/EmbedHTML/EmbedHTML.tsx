import React from "react";
import type { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";

interface IEmbedHTMLProps {
  html?: string | null;
}

const EmbedHTML: React.FC<PlugProps<IEmbedHTMLProps>> = (props) => {
  const { html } = props.node;
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EmbedHTML;
