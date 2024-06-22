import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  updatePost,
  createPost,
  getFilePreview,
} from "../../services/dbCRUDService";
import { Button, Input, RTE, Select } from "../index";

function PostForm({ post }) {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const submit = async (data) => {
    if (post) {
      const newImage = data.image[0] || null;

      const dbPost = await updatePost(post.$id, {
        ...data,
        newImage,
        originalImage: post.featuredImage,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const dbPost = await createPost({
        ...data,
        userId: userData.$id,
        featuredImage: data.image[0] || null,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/\W+/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap rounded-md bg-light-secondary-400 py-2"
    >
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label="Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/*"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="mb-4 w-full">
            <img
              src={getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
