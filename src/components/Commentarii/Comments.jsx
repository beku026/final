import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons/lib/icons";
import { Tooltip } from "antd";
import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { commentContext } from "../../context/commentsContext";
import moment from 'moment';
import "./Comments.css";
const Comments = ({ item }) => {
  const { deleteComment } = useContext(commentContext);
  const {
    user: { email },
  } = useAuth();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems:'center',
        width: "100%",
        height: "100px",
        marginBottom: "50px"
      }}
    >
      <div style={{ height: "100%" }}>
        <span style={{ color: "red", fontSize: "18px" }}>{email}</span>
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span style={{ color: "grey", fontSize: "18px" }} >{'    '+moment().fromNow()}</span>
        </Tooltip>
        <h5 style={{ color: "black" }}>{item.word}</h5>
        <div>
          <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
              {action === "liked" ? (
                <LikeFilled style={{ color: "red", fontSize: "18px" }} />
              ) : (
                <LikeOutlined style={{ color: "black", fontSize: "18px" }} />
              )}
              <span className="comment-action">{likes}</span>
            </span>
          </Tooltip>

          <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
              {action === "disliked" ? (
                <DislikeFilled style={{ color: "red", fontSize: "18px" }} />
              ) : (
                <DislikeOutlined style={{ color: "black", fontSize: "18px" }} />
              )}
              <span className="comment-action">{dislikes}</span>
            </span>
          </Tooltip>
        </div>
      </div>
      <button
        style={{
          height: "30%",
          width: "5%",
          border: "none",
          backgroundColor: "orange",
          color: "white",
          fontSize: "18px",
          borderRadius: "5px",
        }}
        onClick={() => deleteComment(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default Comments;