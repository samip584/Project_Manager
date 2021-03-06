export const BASE_URL = "http://localhost:5000/api";

export const endPoints = {
  addComment  : '/task/comment/add',
  addTag      : '/task/tag/add',
  addTask     : '/task/create',
  addUser     : '/project/adduser',
  allUsers    : '/users/all',
  comments    : '/task/comment/',
  deleteComment : '/task/comment/delete',
  deleteProject : '/project/delete',
  deleteTask  : '/task/delete',
  getUserData : '/users/id/',
  projectById : '/project/id/',
  projectTask : '/task/all/',
  projectUser : '/project/users/',
  removeTag   : '/task/tag/delete',
  removeUser  : '/project/removeuser',
  tags        : '/task/tag/id/',
  taskById    : '/task/id/',
  updateProject : '/project/update',
  updateTask  : '/task/update',
  userByRole  : '/users/role/',
  userDelete  : '/users/delete',
  userUpdate  : '/users/update',
};