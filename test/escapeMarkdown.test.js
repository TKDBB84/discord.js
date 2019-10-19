'use strict';

/* eslint-disable max-len, no-undef */

const DiscordUtil = require('../src/util/DiscordUtil');
const testString = '`_Behold!_`\n||___~~***```js\n`use strict`;\nrequire(\'discord.js\');```***~~___||';

describe('escapeCodeblock', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeCodeBlock(testString))
      .toBe('`_Behold!_`\n||___~~***\\`\\`\\`js\n`use strict`;\nrequire(\'discord.js\');\\`\\`\\`***~~___||');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeCodeBlock('```test```'))
      .toBe('\\`\\`\\`test\\`\\`\\`');
  });
});


describe('escapeInlineCode', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeInlineCode(testString))
      .toBe('\\`_Behold!_\\`\n||___~~***```js\n\\`use strict\\`;\nrequire(\'discord.js\');```***~~___||');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeInlineCode('`test`'))
      .toBe('\\`test\\`');
  });
});


describe('escapeBold', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeBold(testString))
      .toBe('`_Behold!_`\n||___~~*\\*\\*```js\n`use strict`;\nrequire(\'discord.js\');```\\*\\**~~___||');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeBold('**test**'))
      .toBe('\\*\\*test\\*\\*');
  });
});


describe('escapeItalic', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeItalic(testString))
      .toBe('`\\_Behold!\\_`\n||\\___~~\\***```js\n`use strict`;\nrequire(\'discord.js\');```**\\*~~__\\_||');
  });

  test('basic (_)', () => {
    expect(DiscordUtil.escapeItalic('_test_'))
      .toBe('\\_test\\_');
  });

  test('basic (*)', () => {
    expect(DiscordUtil.escapeItalic('*test*'))
      .toBe('\\*test\\*');
  });
});


describe('escapeUnderline', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeUnderline(testString))
      .toBe('`_Behold!_`\n||_\\_\\_~~***```js\n`use strict`;\nrequire(\'discord.js\');```***~~\\_\\__||');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeUnderline('__test__'))
      .toBe('\\_\\_test\\_\\_');
  });
});


describe('escapeStrikethrough', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeStrikethrough(testString))
      .toBe('`_Behold!_`\n||___\\~\\~***```js\n`use strict`;\nrequire(\'discord.js\');```***\\~\\~___||');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeStrikethrough('~~test~~'))
      .toBe('\\~\\~test\\~\\~');
  });
});


describe('escapeSpoiler', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeSpoiler(testString))
      .toBe('`_Behold!_`\n\\|\\|___~~***```js\n`use strict`;\nrequire(\'discord.js\');```***~~___\\|\\|');
  });

  test('basic', () => {
    expect(DiscordUtil.escapeSpoiler('||test||'))
      .toBe('\\|\\|test\\|\\|');
  });
});


describe('escapeMarkdown', () => {
  test('shared', () => {
    expect(DiscordUtil.escapeMarkdown(testString))
      .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
  });

  test('no codeBlock', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { codeBlock: false }))
      .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*```js\n\\`use strict\\`;\nrequire(\'discord.js\');```\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
  });

  test('no inlineCode', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { inlineCode: false }))
      .toBe('`\\_Behold!\\_`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n`use strict`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
  });

  test('no bold', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { bold: false }))
      .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_\\~\\~\\***\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`**\\*\\~\\~\\_\\_\\_\\|\\|');
  });

  test('no italic', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { italic: false }))
      .toBe('\\`_Behold!_\\`\n\\|\\|_\\_\\_\\~\\~*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\**\\~\\~\\_\\__\\|\\|');
  });

  test('no underline', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { underline: false }))
      .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\___\\~\\~\\*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~__\\_\\|\\|');
  });

  test('no strikethrough', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { strikethrough: false }))
      .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_~~\\*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*~~\\_\\_\\_\\|\\|');
  });

  test('no spoiler', () => {
    expect(DiscordUtil.escapeMarkdown(testString, { spoiler: false }))
      .toBe('\\`\\_Behold!\\_\\`\n||\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_||');
  });

  describe('code content', () => {
    test('no code block content', () => {
      expect(DiscordUtil.escapeMarkdown(testString, { codeBlockContent: false }))
        .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n`use strict`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
    });

    test('no inline code content', () => {
      expect(DiscordUtil.escapeMarkdown(testString, { inlineCodeContent: false }))
        .toBe('\\`_Behold!_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n\\`use strict\\`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
    });

    test('neither inline code or code block content', () => {
      expect(DiscordUtil.escapeMarkdown(testString, { inlineCodeContent: false, codeBlockContent: false }))
      // eslint-disable-next-line max-len
        .toBe('\\`_Behold!_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n`use strict`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
    });

    test('neither code blocks or code block content', () => {
      expect(DiscordUtil.escapeMarkdown(testString, { codeBlock: false, codeBlockContent: false }))
        .toBe('\\`\\_Behold!\\_\\`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*```js\n`use strict`;\nrequire(\'discord.js\');```\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
    });

    test('neither inline code or inline code content', () => {
      expect(DiscordUtil.escapeMarkdown(testString, { inlineCode: false, inlineCodeContent: false }))
        .toBe('`_Behold!_`\n\\|\\|\\_\\_\\_\\~\\~\\*\\*\\*\\`\\`\\`js\n`use strict`;\nrequire(\'discord.js\');\\`\\`\\`\\*\\*\\*\\~\\~\\_\\_\\_\\|\\|');
    });

    test('edge-case odd number of fenses with no code block content', () => {
      expect(DiscordUtil.escapeMarkdown('**foo** ```**bar**``` **fizz** ``` **buzz**', { codeBlock: false, codeBlockContent: false }))
        .toBe('\\*\\*foo\\*\\* ```**bar**``` \\*\\*fizz\\*\\* ``` \\*\\*buzz\\*\\*');
    });

    test('edge-case odd number of backticks with no inline code content', () => {
      expect(DiscordUtil.escapeMarkdown('**foo** `**bar**` **fizz** ` **buzz**', { inlineCode: false, inlineCodeContent: false }))
        .toBe('\\*\\*foo\\*\\* `**bar**` \\*\\*fizz\\*\\* ` \\*\\*buzz\\*\\*');
    });
  });
});

/* eslint-enable max-len, no-undef */
