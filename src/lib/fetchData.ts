async function fetchData(url: string) {
  const res = await fetch(url);
  return res.json();
}

export default fetchData;
