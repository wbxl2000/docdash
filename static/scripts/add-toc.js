// 给 tutorials 文章新增目录功能
if (location.href.includes('tutorial')) {

  const tocContainer = document.createElement('div');
  tocContainer.innerHTML
  tocContainer.setAttribute('id', 'toc-container');
  const articleElement = document.getElementsByTagName('article')[0];
  articleElement.insertAdjacentElement('afterend', tocContainer);
  [...document.getElementsByTagName('h1')].forEach((element,index) => element.id = `h1-${index}`);
  [...document.getElementsByTagName('h2')].forEach((element,index) => element.id = `h2-${index}`);
  [...document.getElementsByTagName('h3')].forEach((element,index) => element.id = `h3-${index}`);
  
  tocbot.init({
    // Where to render the table of contents.
    tocSelector: '#toc-container',
    // Where to grab the headings to build the table of contents.
    contentSelector: 'article',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2',
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: false,
  });
}