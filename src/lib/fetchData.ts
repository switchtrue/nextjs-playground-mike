import wrapPromise from "./wrapPromise";

async function fetchData(url: string) {
  // Arbitrary delay to make async fetches more obvious
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  const res = await fetch(url);
  return res.json();
}

export default fetchData;
