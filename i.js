for (const [category, items] of Object.entries(data)) {
  if (category === 'title') continue;
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
    ul.appendChild(li);
  });

}