const test = require('ava');
const p = require("./module.js");

// TITLES

test("Title 1", t => {
	const result = p.parser("# Title 1\n");
	t.is(result, "<h1>Title 1</h1>");
});

// test("Title 2", t => {
// 	const result = p.parser("## Title 2\n\n");
// 	t.is(result, "<h2>Title 2</h2>");
// });

// test("Title 3", t => {
// 	const result = p.parser("### Title 3\n\n");
// 	t.is(result, "<h3>Title 3</h3>");
// });

// TYPOGRAPHY

// test("Citation", t => {
// 	const result = p.parser("> This is a citation\n");
// 	t.is(result, "<blockquote>This is a citation</blockquote>");
// });

// test('Bold', t => {
// 	const result = p.parser("Sometimes with *bold* inside.");
// 	t.is(result, "<p>Sometimes with <strong>bold</strong> inside.</p>");
// });

// test('Bold finisher', t => {
// 	const result = p.parser("Sometimes with *bold*");
// 	t.is(result, "<p>Sometimes with <strong>bold</strong></p>");
// });


// test('code', t => {
// 	const result = p.parser("I do some \`code\` text.");
// 	t.is(result, "<p>I do some <code>code</code> text.</p>");
// });


// test('code finisher', t => {
// 	const result = p.parser("I do some \`code\`");
// 	t.is(result, "<p>I do some <code>code</code></p>");
// });

// test('italic', t => {
// 	const result = p.parser("Sometimes with _italic_ text? ");
// 	t.is(result, "<p>Sometimes with <em>italic</em> text? </p>");
// });

// test('italic finisher', t => {
// 	const result = p.parser("Sometimes with _italic_");
// 	t.is(result, "<p>Sometimes with <em>italic</em></p>");
// });

// PARAGRAPHS

// test('simple text', t => {
// 	const result = p.parser(`simple text`);
// 	t.is(result, "<p>simple text</p>");
// });

// test('paragraph', t => {
// 	const result = p.parser(`I am a line\nI'm a second line`);
// 	t.is(result, "<p>I am a line</p><p>I'm a second line</p>");
// });

// // // LINKS

// test('Link without A11Y label', t => {
// 	const result = p.parser("{link_url, textlink}");
// 	t.is(result, `<a href="link_url">textlink</a>`);
// });

// test('Link with A11Y label', t => {
// 	const result = p.parser("{link_url, textlink, a11ylabel}");
// 	t.is(result, `<a href="link_url" aria-label="a11ylabel">textlink</a>`);
// });

// // IMAGES

// test('Image basic', t => {
// 	const result = p.parser("[imgname]");
// 	t.is(result, `<img src="imgname"></img>`);
// });

// test('Image with alt', t => {
// 	const result = p.parser("[imgname, altText]");
// 	t.is(result, `<img src="imgname" alt="altText"></img>`);
// });

// test('Image with alt and caption', t => {
// 	const result = p.parser("[imgname, altText, figcaptionText]");
// 	t.is(result, `<figure><img src="imgname" alt="altText"></img><figcaption>figcaptionText</figcaption></figure>`);
// });

// // LISTS

// test('Bullet list', t => {
// 	const result = p.parser("\n- AAA\n- BBB\n- CCC\n");
// 	t.is(result, "<ul><li>AAA</li><li>BBB</li><li>CCC</li></ul>");
// });


// test('Ordered list', t => {
// 	const result = p.parser(`
// 		+ Number 1
// 		+ Number 2
// 		+ Number 3
// 	`);
// 	t.is(result, `
// 		<ol>
// 			<li>Number 1</li>
// 			<li>Number 2</li>
// 			<li>Number 3</li>
// 		</ol>
// 	`);
// });


// test('Descriptive list', t => {
// 	const result = p.parser(`
// 		? Term 1 : definition 1
// 		? Term 2 : definition 2
// 	`);
// 	t.is(result, `
// 		<dl>
// 			<dt>Term 1</dt>
// 			<dd>definition 1</dd>
// 			<dt>Term 2</dt>
// 			<dd>definition 2</dd>
// 		</dl> 
// 	`);
// });