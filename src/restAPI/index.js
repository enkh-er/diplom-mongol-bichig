import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7070",
});

export async function getCategories() {
  return await api.get("/categories").then((res) => {
    return res.data;
  });
}
export async function getCategory(id) {
  return await api.get("/category/" + id).then((res) => {
    return res.data;
  });
}
export async function getCategoryByCode(code) {
  return await api.get("/category-code/" + code).then((res) => {
    return res.data;
  });
}
export async function getCategoryByLink(link) {
  return await api.get("/category-link/" + link).then((res) => {
    return res.data;
  });
}
export async function deleteCategory(id) {
  return await api.delete("/delete-category/" + id).then((res) => {
    return res.data;
  });
}
export async function addCategory(category) {
  return await api.post("/create-category", category).then((res) => {
    return res.data;
  });
}
export async function updateCategory(category) {
  return await api.post("/update-category", category).then((res) => {
    return res.data;
  });
}
export function addMenu(menu) {
  api.post("/create-menu", menu);
}

export function changeMenu(menu) {
  api.post("/update-menu", menu);
}

export function deleteMenu(id, name) {
  api.delete("/delete-menu/" + id + "/" + name);
}

export async function getMenusByCode(code) {
  return await api.get("/menus/" + code).then((res) => {
    return res.data;
  });
}

export async function getMenus() {
  return await api.get("/menus").then((res) => {
    return res.data;
  });
}

export async function addCf(customField) {
  return await api.post("/create-custom-fields", customField).then((res) => {
    return res.data;
  });
}

export async function getCfs() {
  return await api.get("/custom-fields").then((res) => {
    return res.data;
  });
}

export async function getCfByCategory(catId) {
  return await api.get("/custom-fields-by-cat/" + catId).then((res) => {
    return res.data;
  });
}

export function deleteCf(id) {
  api.delete("/delete-custom-fields/" + id);
}

export function deleteCFField(id, name) {
  api.delete("/delete-cf-by-name/" + id + "/" + name);
}

export function deleteCFCat(id, catID) {
  api.delete("/delete-cf-by-catid/" + id + "/" + catID);
}

export function updateCF(customField) {
  api.post("/update-custom-fields", customField);
}

export async function addPost(post) {
  return await api.post("/post", post).then((res) => {
    return res.data;
  });
}

export async function checkLink(link) {
  return await api.get("/post-link/" + link).then((res) => {
    return res.data;
  });
}

export async function getPosts() {
  return await api.get("/posts").then((res) => {
    return res.data;
  });
}
export async function getPostByName(title) {
  return await api.get("/post-by-name/" + title).then((res) => {
    return res.data;
  });
}

export async function getPostByCat(cat) {
  return await api.get("/post-by-cat/" + cat).then((res) => {
    return res.data;
  });
}

export async function getPostById(id) {
  return await api.get("/post/" + id).then((res) => {
    return res.data;
  });
}

export function deletePost(id) {
  api.delete("/post/" + id);
}

export async function addFile(file) {
  return await api.post("/upload", file).then((res) => {
    return res.data;
  });
}

export async function getFileById(id) {
  return await api
    .get("/download/" + id, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
    );
}

export async function getFileByName(name) {
  return await api.get("/image/" + name).then((res) => {
    return res.data;
  });
}
