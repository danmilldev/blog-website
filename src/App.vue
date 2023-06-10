<template>
  <div v-if="showPost == true" class="overlay">
    <div class="overlay-box">
      <h1>New Post Window</h1>
      <input v-model="postTitle" autofocus type="text" id="title-input" placeholder="title...">
      <textarea v-model="postText" name="" id="description-input"
       cols="30" rows="10" placeholder="blog description..."></textarea>
      <p v-if="errorMessage" class="errorMessage"> {{ errorMessage }}</p>
      <button @click="addPost">Add Post</button>
      <button @click="cleanOnClose">Close</button>
    </div>
  </div>

  <div class="header">
    <h1>Blog</h1>
    <button @click="showPost = true">New Post</button>
  </div>
  <div class="blog-cards">
    <div v-for="post in posts" class="card">
      <h1>{{post.title}}</h1>
      <p>{{post.description}}</p>
    </div>
  </div>
</template>

<script setup>
//import statements
import { ref } from "vue";

//constants
const posts = ref([]);
const showPost = ref(false);
const postTitle = ref("");
const postText = ref("");
const errorMessage = ref("");

//checks for length of input boxes
//pushes a new object into the posts array
//emptys out all boxes and sets back all values if it was successfully
const addPost = () => {

  if(postTitle.value.length < 10)
  {
    errorMessage.value = "ERROR: title has to be at least 10 characters long";
    return;
  }
  else if(postText.value.length < 10)
  {
    errorMessage.value = "ERROR: description has to be at least 10 characters long";
    return;
  }

  //push the object as one into the value of the array
  posts.value.push({
    id: Math.floor(Math.random() * 100000),
    title: postTitle.value,
    description: postText.value
  });

  postTitle.value = "";
  postText.value = "";
  showPost.value = false;
  errorMessage.value = "";
}

//closes the overlay-box and cleans up all values
function cleanOnClose() {
  postTitle.value = "";
  postText.value = "";
  showPost.value = false;
  errorMessage.value = "";
}

</script>

<style scoped>

.header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: black;
}

.header button {
  border-radius: 25px;
  border: 0.15rem solid white;
  padding: 10px;
  cursor: pointer;
  background-color: red;
  color: whitesmoke;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: larger;
  margin: 1rem;
  font-weight: bold;
}

.header button:hover{
  border-color: red;
}

.header h1{
  color: white;
  font-weight: bold;
}

.blog-cards{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.card{
  border: 5px solid white;
  border-radius: 25px;
  width: 50%;
  color: White;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding-left: 25px;
  margin-top: 20px;
  background-color: darkgreen;
  cursor: pointer;
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(48, 48, 48, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-box{
  width: 750px;
  background-color: white;
  border-radius: 20px;
  border: 3px solid gray;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.overlay-box button{
  padding: 10px 20px;
  font-size: 20px;
  widows: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 20px;
}

.overlay-box input{
  margin-bottom: 10px;
}

.errorMessage{
  color: red;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

</style>
