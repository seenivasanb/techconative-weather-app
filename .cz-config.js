module.exports = {
  types: [
    {
      value: ":rocket: BUILD",
      name: "🚀 BUILD\t : Add or update regards to build process",
    },
    {
      value: ":green_heart: CI",
      name: "💚 CI\t\t : Add or update regards to build process",
    },
    {
      value: ":pencil2: DOCS",
      name: "✏️  DOCS\t : Add or update documentation",
    },
    {
      value: ":sparkles: FEATURE",
      name: "✨ FEATURE\t : Adding a new feature",
    },
    {
      value: ":adhesive_bandage: FIX",
      name: "🩹 FIX\t : Fixing a bug",
    },
    {
      value: ":recycle: REFACTOR",
      name: "♻️  REFACTOR\t : Code change that neither fixes a bug nor adds a feature",
    },
    {
      value: ":zap: PERFORMANCE",
      name: "⚡️ PERFORMANCE : Code change that improves performance",
    },
    {
      value: ":rewind: REVERT",
      name: "⏪️ REVERT\t : Revert to a commit",
    },
    {
      value: ":art: STYLE",
      name: "🎨 STYLE\t : Add or update styles, ui or ux",
    },
    {
      value: ":test_tube: TEST",
      name: "🧪 TEST\t : Adding tests cases",
    },
    {
      value: ":construction: WIP",
      name: "🚧 WIP\t : Work in progress",
    },
  ],

  // skip any questions you want
  skipQuestions: ["header", "scope", "body", "footer"],
  subjectLimit: 100,
};
