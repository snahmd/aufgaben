//! Aufgaben 1

fetch("https://picsum.photos/v2/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//! Aufgaben 2

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.map((comment: Comment) => comment.email));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const highestPostId = Math.max(...data.map((post: Post) => post.id));
    console.log(highestPostId);

    const shortestTitle = data.reduce(
      (shortest: string, post: Post) =>
        post.title.length < shortest.length ? post.title : shortest,
      data[0].title
    );
    console.log(shortestTitle);

    const longestBody = data.reduce(
      (longest: string, post: Post) =>
        post.body.length > longest.length ? post.body : longest,
      data[0].body
    );
    console.log(longestBody);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//! Aufgaben 3
const link = "https://picsum.photos/v2/list";
type Photo = {
  id: string;
  author: string;
  url: string;
  download_url: string;
};

fetch(link)
  .then((response: Response) => {
    if (!response.ok) {
      console.error("Response doesn't work");
    }
    return response.json();
  })
  .then((photos: Photo[]) => {
    console.log(photos);
    const photoContainer = document.getElementById("photo") as HTMLDivElement;
    photoContainer.style.display = "flex";
    photoContainer.style.justifyContent = "space-around";
    photoContainer.style.justifyItems = "center";
    photoContainer.style.flexWrap = "wrap";
    photos.forEach((photo: Photo) => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img") as HTMLImageElement;
      imgElement.style.width = "30vw";
      imgElement.src = photo.download_url;
      const figCaptionElement = document.createElement("figcaption");
      figCaptionElement.style.textAlign = "center";
      figCaptionElement.textContent = photo.author;
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      photoContainer.appendChild(figureElement);
    });
  })
  .catch((error: Error) => {
    console.error(error);
  });
