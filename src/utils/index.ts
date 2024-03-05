export const fetchData = async () => {
  const data = await fetch(
        "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
    );
    return await data.json();
};
