fetch("http://localhost:3000/images/1")
  .then((resp) => resp.json())
  .then((data) => renderGram(data));

const title = document.getElementById("card-title");
const image = document.getElementById("card-image");
const commentList = document.getElementById("comments-list");
const commentForm = document.getElementById("comment-form");
const currentEntry = document.getElementById("comment");
const likeBtn = document.getElementById("like-button");
const likesNum = document.getElementById("like-count");

function renderGram(gram) {
  title.innerText = gram.title;
  image.src = gram.image;

  commentList.innerHTML = "";

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newComment = document.createElement("li");
    newComment.textContent = currentEntry.value;
    commentList.appendChild(newComment);
    console.log(newComment);
    e.target.reset();
  });

  likeBtn.addEventListener("click", () => {
    ++gram.likes;
    likesNum.textContent = `${gram.likes} likes`;
  });
}
