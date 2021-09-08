const { moduleInterop } = require('@textlint/module-interop');

module.exports = {
  rules: {
    'sentence-length': moduleInterop(require('textlint-rule-sentence-length')),
    'max-ten': moduleInterop(require('textlint-rule-max-ten')),
    'max-kanji-continuous-len': moduleInterop(require('textlint-rule-max-kanji-continuous-len')),
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),
    'no-double-negative-ja': moduleInterop(require('textlint-rule-no-double-negative-ja')),
    'no-dropping-the-ra': moduleInterop(require('textlint-rule-no-dropping-the-ra')),
    'no-doubled-conjunction': moduleInterop(require('textlint-rule-no-doubled-conjunction')),
    'no-doubled-joshi': moduleInterop(require('textlint-rule-no-doubled-joshi')),
    'no-hankaku-kana': moduleInterop(require('textlint-rule-no-hankaku-kana')),
    'ja-no-abusage': moduleInterop(require('textlint-rule-ja-no-abusage')),
    'ja-no-redundant-expression': moduleInterop(require('textlint-rule-ja-no-redundant-expression')),
    'ja-hiragana-hojodoushi': moduleInterop(require('textlint-rule-ja-hiragana-hojodoushi')),
    'prefer-tari-tari': moduleInterop(require('textlint-rule-prefer-tari-tari')),
    'ja-no-inappropriate-words': moduleInterop(require('textlint-rule-ja-no-inappropriate-words')),
    'no-hoso-kinshi-yogo': moduleInterop(require('textlint-rule-no-hoso-kinshi-yogo')),
    'max-comma': moduleInterop(require('textlint-rule-max-comma')),
    'no-mixed-zenkaku-and-hankaku-alphabet': moduleInterop(require('textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet')),
    'terminology': moduleInterop(require('textlint-rule-terminology')),
    'ginger': moduleInterop(require('textlint-rule-ginger')),
    'no-nfd': moduleInterop(require('textlint-rule-no-nfd')),
    '@textlint-rule/no-invalid-control-character': moduleInterop(require('textlint-rule-no-invalid-control-character')),
    'no-zero-width-spaces': moduleInterop(require('textlint-rule-no-zero-width-spaces')),
    '@textlint-rule/no-unmatched-pair': moduleInterop(require('textlint-rule-no-unmatched-pair')),
    'ja-unnatural-alphabet': moduleInterop(require('textlint-rule-ja-unnatural-alphabet')),
    'no-kangxi-radicals': moduleInterop(require('textlint-rule-no-kangxi-radicals')),
    'use-si-units': moduleInterop(require('textlint-rule-use-si-units')),
    'no-dead-link': moduleInterop(require('textlint-rule-no-dead-link')),
    'no-surrogate-pair': moduleInterop(require('textlint-rule-no-surrogate-pair'))
  },
  rulesConfig: {
    'sentence-length': true,
    'max-ten': true,
    'max-kanji-continuous-len': true,
    'ja-no-mixed-period': true,
    'no-double-negative-ja': true,
    'no-dropping-the-ra': true,
    'no-doubled-conjunction': true,
    'no-doubled-joshi': true,
    'no-hankaku-kana': true,
    'ja-no-abusage': true,
    'ja-no-redundant-expression': true,
    'ja-hiragana-hojodoushi': true,
    'prefer-tari-tari': true,
    'ja-no-inappropriate-words': true,
    'no-hoso-kinshi-yogo': true,
    'max-comma': true,
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    'terminology': {
      // Load default terms (see terms.json in the repository)
      defaultTerms: true,
      // Syntax elements to skip. Overrides the default
      skip: ['Blockquote'],
      // List of terms
      terms: './terms.json'
    },
    'ginger': true,
    'no-nfd': true,
    '@textlint-rule/no-invalid-control-character': true,
    'no-zero-width-spaces': true,
    '@textlint-rule/no-unmatched-pair': true,
    'ja-unnatural-alphabet': true,
    'no-kangxi-radicals': true,
    'use-si-units': true,
    'no-dead-link': true,
    'no-surrogate-pair': true
  }
};
