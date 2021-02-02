import React from "react";
import { Route } from "react-router-dom";
import { ProfileProvider } from "./auth/AuthProvider";
import { Profile } from "./auth/Profile";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";
import { PostDetails } from "./posts/PostDetail";
import { CategoryProvider } from "./categories/categoryProvider";
import { CategoryList } from "./categories/categoryList";
import { CategoryForm } from "./categories/categoryForm";
import { PostForm } from "./posts/PostForm";
import { CommentProvider } from "./comments/CommentProvider";
import { CommentForm } from "./comments/CommentForm";
import { UserPosts } from "./posts/UsersPosts";

export const ApplicationViews = (props) => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>

      <CategoryProvider>
        <Route exact path="/categories">
          <CategoryList {...props} />
          <CategoryForm />
        </Route>
      </CategoryProvider>

      <ProfileProvider>
        <Route exact path="/" render={(props) => <Profile {...props} />} />
      </ProfileProvider>

      <CategoryProvider>
        <PostProvider>
          <Route
            exact
            path="/posts"
            render={(props) => <PostList {...props} />}
          />
          <Route
            exact
            path="/myposts"
            render={(props) => <UserPosts {...props} />}
          />
          <Route
            exact
            path="/posts/:id(\d+)"
            render={(props) => <PostDetails {...props} />}
          />

          <Route
            exact
            path="/PostForm"
            render={(props) => <PostForm {...props} />}
          />
        </PostProvider>
      </CategoryProvider>

      <PostProvider>
        <CommentProvider>
          <Route
            path="/CommentForm"
            render={(props) => <CommentForm {...props} />}
          />
        </CommentProvider>
      </PostProvider>
    </>
  );
};
