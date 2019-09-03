import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import firebase from "../Firebase/config";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");

  const [isBusy, setIsBusy] = useState("");
  const [routeRedirect, setRedirect] = useState("");

  const addPost = async e => {
    e.preventDefault();
    let post = {
      title,
      content,
      cover: cover[0]
    };
    await firebase
      .createPost(post)
      .then(() => {
        console.log("Post created successfully");
        setIsBusy(false);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
        setIsBusy(false)
      });
  };
  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  let createForm;
  if (isBusy) {
    createForm = (
      <div className="processing">
        <p>Request is being processed!</p>
      </div>
    );
  } else {
    createForm = (
      <div className="set_top_margin">
        <form onSubmit={addPost}>
          <h1>Create a new Post</h1>

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            onChange={e => setContent(e.target.value)}
          ></textarea>
          <label htmlFor="cover">Cover:</label>
          <input
            type="file"
            name="cover"
            onChange={e => setCover(e.target.files)}
          />

          <button
            className="btn waves-effect waves-light"
            type="submit"
            value="create post"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  return <React.Fragment>{createForm}</React.Fragment>;
};

export default  withRouter(Create);
