import { hrefWithState } from './hrefWithState';

const form = { name: '', age: 0 };

describe('hrefWithState', () => {
  test('encodes state onto the target path', () => {
    expect(hrefWithState('/de', form, { name: 'Bob', age: 30 }, '')).toEqual(
      "/de?name=%27Bob%27&age=30",
    );
  });

  test('drops values equal to the default', () => {
    expect(hrefWithState('/de', form, { name: '', age: 30 }, '')).toEqual(
      '/de?age=30',
    );
  });

  test('drops a stale param the state has since reset', () => {
    expect(
      hrefWithState('/de', form, form, "?name=%27Bob%27&age=30"),
    ).toEqual('/de');
  });

  test('keeps params the shape does not own', () => {
    expect(
      hrefWithState('/de', form, form, '?utm_source=hn&name=%27Bob%27'),
    ).toEqual('/de?utm_source=hn');
  });

  test("the href's own params win over the current url", () => {
    expect(
      hrefWithState('/de?utm_source=rss', form, form, '?utm_source=hn'),
    ).toEqual('/de?utm_source=rss');
  });

  test('keeps the hash', () => {
    expect(hrefWithState('/de#pricing', form, { ...form, age: 30 }, '')).toEqual(
      '/de?age=30#pricing',
    );
  });

  test('leaves a bare href alone when the state is default', () => {
    expect(hrefWithState('/de', form, form, '')).toEqual('/de');
  });
});
