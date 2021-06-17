import React from "react";
import { getAllBlog, getPostBlog, getPreviewBlog } from "../lib/api";
import { client } from "lib/client";

test("the data is peanut butter", async () => {
  const data = await getAllBlog();
  expect(data).toBe("peanut butter");
});
