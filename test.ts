async function fetchData() {
    const response = await fetch("https://dummyjson.com/posts/1");
    const data = await response.json();
    console.log(data);
}

fetchData();