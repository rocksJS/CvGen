module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-css-modules"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
