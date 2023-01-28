module.exports = {
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "block-closing-brace-empty-line-before": "never",
    "block-opening-brace-newline-after": ["always"],
    "order/properties-order": ["position", "z-index", "top", "right", "bottom", "left"],
    "block-no-empty": null,
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    "max-line-length": [300, { ignore: ["comments"] }],
    "selector-combinator-space-after": "never",
    "selector-combinator-space-before": "never",
  },
};
