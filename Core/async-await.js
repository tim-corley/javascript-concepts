const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('i did something!'), 3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('BEFORE');
doSomething()
console.log('AFTER');


// retrieving & consuming json data with promises
const getFirstPostComments = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts") // get all posts
      .then(res => res.json()) // parse JSON
      .then(posts => posts[0]) // pick first post
      .then(post =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      )
      .then(commentRes => commentRes.json())
      .then(commentRes =>
        commentRes.forEach((comment, idx) =>
          console.log(`comment data (${idx}):\n`, comment)
        )
      );
  };
  
  getFirstPostComments();

// retrieving & consuming json data with async/await
const getSecondPostComments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const post = posts[1];
    const commentRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    const commentData = await commentRes.json();
    commentData.forEach((comment, idx) =>
      console.log(
        `[via async/await] second post comment data (${idx}):\n`,
        comment
      )
    );
    return commentData;
  };
  
  getSecondPostComments();
  