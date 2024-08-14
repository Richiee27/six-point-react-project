import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_POSTS } from "../dataa";
import "../css/dashboard.css";

const Dashboard = () => {
  const [props, setPost] = useState(DUMMY_POSTS);

  return (
    <section className="dashboard">
      <center>Dashboard</center>
      <table>
        <th>Produk</th>
        <tr>
          <td>
            {props.length ? (
              <div className="container dashboard__container">
                {props.map((props) => {
                  return (
                    <article key={props.id} className="dashboard__post">
                      <div className="dashboard__post-info">
                        <div className="dashboard__post-thumbnail">
                          <img src={props.thumbnail} alt="" />
                        </div>
                        <h5>{props.title}</h5>
                      </div>
                      <div className="dashboard__post-actions">
                        <Link to={`/posts/${props.id}`} className="btn sm">
                          View
                        </Link>
                        <Link
                          to={`/posts/${props.id}/edit`}
                          className="btn sm primary"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/posts/${props.id}/delete`}
                          className="btn sm danger"
                        >
                          Delete
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h2 className="center">Belum ada konten</h2>
            )}
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Dashboard;
