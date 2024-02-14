export type User = {
  displayName: string;
};
export const createPost = (user: User, DB: D1Database) => {
  return {
    user,
  };
};
