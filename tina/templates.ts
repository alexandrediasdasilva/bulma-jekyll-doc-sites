import type { TinaField } from "tinacms";
export function articleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "boolean",
      name: "common_troubleshooting_topic",
      label: "Problème récurrent",
    },
    {
      type: "boolean",
      name: "featured",
      label: "En vedette",
    },
  ] as TinaField[];
}
export function astucesFields() {
  return [
    {
      type: "object",
      name: "astuces",
      label: "Astuces",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "Texte",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "icon",
          label: "Icône",
        },
      ],
    },
  ] as TinaField[];
}
export function collectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
