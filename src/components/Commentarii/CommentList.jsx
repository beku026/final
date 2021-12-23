import { Button, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { commentContext } from "../../context/commentsContext";
import Comments from "../Commentarii/Comments";
import "./Comments.css";
import { useAuth } from "../../context/authContext";


const CommentList = ({ id }) => {
  const { user: { email } } = useAuth()
  const { getComments, comments, createComment } = useContext(commentContext);
  useEffect(() => {
    getComments(id);
  }, [id]);
  const [newComment, setNewComment] = useState({
    word: "",
  }); 

  function handleValues(e) {
    const createdAtMs = Date.now()
    let values = {
      ...newComment,
      [e.target.name]: e.target.value,
      createdAtMs,
      tanksId: id,
      email
    };
    setNewComment(values);
  }

  function checkValues() {
    if (!newComment.word) {
      alert("Вы еще ничего не написали!");
      return;
    } else {
      
      createComment(newComment, id );
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "solid black 2px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Оставьте отзыв/комментарий</h3>
      <div className="items-list">
        {comments.map((item) => (
          <Comments id={id} key={item.id} item={item} />
        ))}
      </div>

      <div style={{ display: "flex", height: "60px" }}>
        <Input
          id="comment"
          onChange={handleValues}
          name="word"
          placeholder="Enter text..."
        />
        <button
          onClick={() => checkValues()}
          style={{
            background: "#3399ff",
            borderRadius: "5px",
            border: "none",
            color: "white",
          }}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CommentList;
