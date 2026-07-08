import React, { useEffect, useState } from "react";
import api from "../api/api";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">All Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div className="bg-white shadow p-4 rounded-xl border">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm mt-2">{post.user?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
