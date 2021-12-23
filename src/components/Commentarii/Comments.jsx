import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons/lib/icons";
import { Tooltip } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { commentContext } from "../../context/commentsContext";
import moment from "moment";
import "./Comments.css";
import { timeSince } from "../helpers/calcTimeLeft";
import { useAuth } from "../../context/authContext";

const Comments = ({ item, id }) => {
  const {
    user: { email },
  } = useAuth();

  const { deleteComment } = useContext(commentContext);

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
        alignItems: "center",
        width: "100%",
        height: "150px",
        marginBottom: "100px",
      }}
    >
      <div
        style={{ height: "100%", width: "100%" }}
        className="d-flex flex-column justify-content-between"
      >
        <div
          className="d-flex  justify-content-start"
          style={{ width: "100%" }}
        >
          <img width="50px" src="https://joeschmoe.io/api/v1/random" alt="" />
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: "100%" }}
          >
            <h6>{item.newComment.email}</h6>
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span style={{ color: "grey", fontSize: "18px" }}>
                {timeSince(item.newComment.createdAtMs)} назад{" "}
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center" >
          <h5 style={{ color: "black" }}>{item.newComment.word}</h5>
          {email === item.newComment.email ? (
            <button
              style={{
                height: "40px",
                width: "5%",
                border: "none",
                backgroundColor: "red",
                color: "white",
                fontSize: "18px",
                borderRadius: "5px",
              }}
              onClick={() => deleteComment(item.id, id)}
            >
              delete
            </button>
          ) : null}
        </div>
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
    </div>
  );
};

export default Comments;
