module.exports = {
  extends: ["gitmoji"],
  rules: {
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "upper-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "BUILD",
        "CI",
        "DOCS",
        "FEATURE",
        "FIX",
        "PERFORMANCE",
        "REFACTOR",
        "REVERT",
        "STYLE",
        "TEST",
        "WIP",
      ],
    ],
  },
};
