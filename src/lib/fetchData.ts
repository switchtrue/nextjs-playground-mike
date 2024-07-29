import wrapPromise from "./wrapPromise";

function fetchData(url: string) {
  // const promise = fetch(url).then((res) => res.json());
  const promise = fetchDataWithDelay(url);

  return wrapPromise(promise);
}

async function fetchDataWithDelay(url: string) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return fetch(url, { cache: "no-store" }).then((res) => res.json());
}

export default fetchData;
