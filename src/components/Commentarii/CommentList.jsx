import { Button, Input} from "antd";
import React, { useContext, useEffect, useState } from "react";
import { commentContext } from "../../context/commentsContext";
import Comments from "../Commentarii/Comments";
import './Comments.css'

const CommentList = () => {
  const { getComments, comments, createComment } = useContext(commentContext);
  useEffect(() => {
    getComments();
  }, []);
  const [newComment, setNewComment] = useState({
    word: ""
  });

  function handleValues(e) {
    let values = {
      ...newComment,
      [e.target.name]: e.target.value,
    };
    setNewComment(values);
  }

  function checkValues() {
    if (!newComment.word) {
      alert("Вы еще ничего не написали!");
      return;
    } else {
      createComment(newComment);
    }

  }
  return (
    <div 
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: 'solid black 2px'
      }}
    >
      <div className="items-list">
      {comments.map((item) => (
        <Comments  key={item.id} item={item} />
      ))}
      </div>

      <div style={{ display: "flex", height: "60px" }}>
        <Input id="comment" onChange={handleValues} name="word" placeholder="Enter text..."/>
        <button onClick={() => checkValues()} style={{background: '#3399ff',borderRadius: '5px', border: 'none', color: 'white'}}>
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CommentList;
