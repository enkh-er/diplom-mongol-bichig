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
export function deleteCategory(id) {
  api.delete("/delete-category/" + id);
}

export async function addCategory(category) {
  api.post("/create-category", category);
}
export function updateCategory(category) {
  api.post("/update-category", category);
}

export function addMenu(menu) {
  api.post("/create-menu", menu);
}

export async function getMenus() {
  return await api.get("/menus").then((res) => {
    return res.data;
  });
}
