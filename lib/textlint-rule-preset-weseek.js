const { moduleInterop } = require('@textlint/module-interop');

module.exports = {
  rules: {
    'sentence-length': moduleInterop(require('textlint-rulesConfig:')),
    'max-ten': moduleInterop(require('textlint-rulesConfig:')),
    'max-kanji-continuous-len': moduleInterop(require('textlint-rulesConfig:')),
    'ja-no-mixed-period': moduleInterop(require('textlint-rulesConfig:')),
    'no-double-negative-ja': moduleInterop(require('textlint-rulesConfig:')),
    'no-dropping-the-ra': moduleInterop(require('textlint-rulesConfig:')),
    'no-doubled-conjunctive-particle-ga': moduleInterop(require('textlint-rulesConfig:')),
    'no-doubled-conjunction': moduleInterop(require('textlint-rulesConfig:')),
    'no-doubled-joshi': moduleInterop(require('textlint-rulesConfig:')),
    'no-hankaku-kana': moduleInterop(require('textlint-rulesConfig:')),
    'ja-no-abusage': moduleInterop(require('textlint-rulesConfig:')),
    'ja-no-redundant-expression': moduleInterop(require('textlint-rulesConfig:')),
    'ja-hiragana-hojodoushi': moduleInterop(require('textlint-rulesConfig:')),
    'prefer-tari-tari': moduleInterop(require('textlint-rulesConfig:')),
    'ja-no-inappropriate-words': moduleInterop(require('textlint-rulesConfig:')),
    'no-hoso-kinshi-yogo': moduleInterop(require('textlint-rulesConfig:')),
    'max-comma': moduleInterop(require('textlint-rulesConfig:')),
    'no-mixed-zenkaku-and-hankaku-alphabet': moduleInterop(require('textlint-rulesConfig:')),
    'ginger': moduleInterop(require('textlint-rulesConfig:')),
    'no-nfd': moduleInterop(require('textlint-rulesConfig:')),
    '@textlint-rule/no-invalid-control-character': moduleInterop(require('textlint-rulesConfig:')),
    'no-zero-width-spaces': moduleInterop(require('textlint-rulesConfig:')),
    '@textlint-rule/no-unmatched-pair': moduleInterop(require('textlint-rulesConfig:')),
    'ja-unnatural-alphabet': moduleInterop(require('textlint-rulesConfig:')),
    'no-kangxi-radicals': moduleInterop(require('textlint-rulesConfig:')),
    'use-si-units': moduleInterop(require('textlint-rulesConfig:')),
    'no-dead-link': moduleInterop(require('textlint-rulesConfig:')),
    'no-surrogate-pair': moduleInterop(require('textlint-rulesConfig:'))
  },
  rulesConfig: {
    'sentence-length': true,
    'max-ten': true,
    'max-kanji-continuous-len': true,
    'ja-no-mixed-period': true,
    'no-double-negative-ja': true,
    'no-dropping-the-ra': true,
    'no-doubled-conjunctive-particle-ga': true,
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
      'defaultTerms': true,
      // Syntax elements to skip. Overrides the default
      'skip': ['Blockquote'],
      // List of terms
      'terms': './terms.json'        
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
