import { defineConfig } from "tinacms";
import { articleFields } from "./templates";
import { astucesFields } from "./templates";
import { collectionFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bacafb0f-ce44-488c-b16e-d7f27fb3e29e", // Get this from tina.io
  token: "7ec91a81097119e5cc684cc5ea36964f8435e841", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Articles",
        name: "articles",
        path: "_articles",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...articleFields(),
        ],
      },
      {
        format: "md",
        label: "Collections",
        name: "collections",
        path: "_collections",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...collectionFields(),
        ],
      },
      {
        format: "yml",
        label: "Astuces",
        name: "astuces",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "tips",
        },
        fields: [
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
        ],
      },
    ],
  },
});
