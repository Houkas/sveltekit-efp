import { HtmlTag } from "svelte/internal";

export type Article = {
    title: string;
    meta_description: string;
    slug : string;
    miniature : string;
    html: HtmlTag;
}