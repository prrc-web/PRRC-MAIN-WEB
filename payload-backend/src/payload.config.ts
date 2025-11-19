import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  admin: {
    user: "users",
  },
  routes: {
    api: "/api",
    admin: "/admin",
  },
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3001",
  collections: [
    {
      slug: "users",
      auth: true,
      fields: [
        {
          name: "displayName",
          type: "text",
        },
        {
          name: "researcher",
          type: "relationship",
          relationTo: "researchers",
        },
        {
          name: "role",
          type: "select",
          options: [
            { label: "Admin", value: "admin" },
            { label: "Editor", value: "editor" },
            { label: "Researcher", value: "researcher" },
          ],
          defaultValue: "researcher",
        },
      ],
    },
    {
      slug: "media",
      upload: {
        staticDir: "public/media",
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "center",
          },
          {
            name: "card",
            width: 768,
            height: 1024,
            position: "center",
          },
          {
            name: "tablet",
            width: 1024,
            height: undefined,
            position: "center",
          },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
      },
      fields: [
        {
          name: "alt",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "researchers",
      admin: {
        useAsTitle: "name",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "bio",
          type: "richText",
        },
        {
          name: "profilePicture",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "contact",
          type: "group",
          fields: [
            {
              name: "email",
              type: "text",
              required: true,
            },
            {
              name: "phone",
              type: "text",
            },
          ],
        },
        {
          name: "resume",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "socialLinks",
          type: "group",
          fields: [
            { name: "linkedIn", type: "text" },
            { name: "website", type: "text" },
          ],
        },
        {
          name: "address",
          type: "group",
          fields: [
            { name: "street", type: "text" },
            { name: "city", type: "text" },
            { name: "state", type: "text" },
            { name: "zip", type: "text" },
            { name: "country", type: "text" },
            { name: "latitude", type: "text" },
            { name: "longitude", type: "text" },
          ],
        },
      ],
    },
    {
      slug: "papers",
      admin: { useAsTitle: "title" },
      access: {
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
      },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "abstract", type: "richText" },
        {
          name: "authors",
          type: "relationship",
          relationTo: "researchers",
          hasMany: true,
        },
        { name: "file", type: "upload", relationTo: "media" },
        { name: "coverImage", type: "upload", relationTo: "media" },
        {
          name: "keywords",
          type: "array",
          fields: [{ name: "keyword", type: "text" }],
        },
        { name: "published", type: "date" },
        { name: "isPublic", type: "checkbox", defaultValue: true },
      ],
    },
    {
      slug: "newsletters",
      admin: { useAsTitle: "title" },
      access: {
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
      },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "issue", type: "text" },
        { name: "date", type: "date" },
        { name: "pdf", type: "upload", relationTo: "media" },
        { name: "excerpt", type: "richText" },
        {
          name: "tags",
          type: "array",
          fields: [{ name: "tag", type: "text" }],
        },
        { name: "isArchived", type: "checkbox" },
      ],
    },
  ],
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/prrc",
  }),
  cors: [process.env.FRONTEND_URL || "http://localhost:3000"],
  csrf: [process.env.FRONTEND_URL || "http://localhost:3000"],
});
